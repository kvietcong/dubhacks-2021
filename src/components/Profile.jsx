import { useContext, useState } from "react";
import { useParams } from "react-router"
import { Context } from "../Context";
import useUser from "../hooks/useUser";
import { capitalizeAllWords } from "../utils/general";
import { checkFollowing } from "../utils/userUtils";

export default function Profile() {
    const { id: userID } = useParams();
    const { user: loggedInUser } = useContext(Context);

    const user = useUser(userID);
    const [ selectedSport, setSelectedSport ] = useState("");

    return user ? (
        <div>
            <div>
                <div className="Profile-image">
                    <img
                        src={user?.profilePicture}
                        alt="User Portrait"
                    />
                </div>
                <h1 className="Profile-name">{user.displayName}</h1>
            </div>

            <div className="Profile-content">
                <div className="Profile-selector Profile-container">
                    <div className="Profile-selector-img">
                        {selectedSport && <img src={`/resources/${selectedSport}.svg`} alt={selectedSport} />}
                    </div>
                    <select
                        value={selectedSport}
                        onChange={event => setSelectedSport(event.target.value)}
                        onLoad={event => setSelectedSport(event.target.value)}
                    >
                        <option value="">Choose a Sport</option>
                        {Object.entries(user.sports).map(([sport, _]) =>
                            <option key={sport} value={sport}>
                                {capitalizeAllWords(sport)}
                            </option>
                        )}
                    </select>
                    {selectedSport && <p>Rating: {user.sports[selectedSport].rating}</p>}
                </div>
                <div className="Profile-container" style={{marginBottom:'50px'}}>
                    <h3>Contact Info</h3>
                    {!loggedInUser ? <p className="Profile-request">LOGIN TO FOLLOW THIS USER</p> :
                    checkFollowing(user, loggedInUser.id)
                    || (loggedInUser.id === userID) ?
                        <ul>
                            <li>Email: {user.email}</li>
                            <li>Phone: {user.phone || "No Phone Available"}</li>
                        </ul> :
                        <p className="Profile-request">REQUEST FOLLOW</p>
                    }
                </div>
                <div>
                    <h3 className="Profile-container">Upcoming Events</h3>
                    <div className="Profile-events">
                        <ul>
                            <li>Event 1</li>
                            <li>Event 2</li>
                        </ul>
                    </div>
                </div>
                {loggedInUser
                ? <button>Request a Match</button>
                : <p>Login to request a match</p>}
            </div>
        </div>
    ) : (
        <div>
            <h1>Loading</h1>
        </div>
    );
}