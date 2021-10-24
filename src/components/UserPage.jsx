import { useContext, useState } from "react";
import { useParams } from "react-router"
import { Context } from "../Context";
import useUser from "../hooks/useUser";
import { capitalizeAllWords } from "../utils/general";
import { checkFollowing } from "../utils/userUtils";

export default function UserPage() {
    const { id: userID } = useParams();
    const { user: loggedInUser } = useContext(Context);

    const user = useUser(userID);
    const [ selectedSport, setSelectedSport ] = useState("");

    return user ? (
        <div>
            <div>
                <img
                    src={user?.profilePicture}
                    alt="User Portrait"
                    style={{height: "50px", width: "50px"}}
                />
                <h1>{user.displayName}</h1>
            </div>
            <hr/>
            <div>
                <select
                    value={selectedSport}
                    onChange={event => setSelectedSport(event.target.value)}
                    onLoad={event => setSelectedSport(event.target.value)}
                >
                    <option value="">Choose a Sport</option>
                    {Object.entries(user.sports).map(([sport, score]) =>
                        <option key={sport} value={sport}>
                            {capitalizeAllWords(sport)}
                        </option>
                    )}
                </select>
                {selectedSport && <p>Elo: {user.sports[selectedSport]}</p>}
            </div>
            <div>
                <h2>Contact Info</h2>
                {!loggedInUser ? <p>Login to Follow This User</p> :
                checkFollowing(user, loggedInUser.id)
                || (loggedInUser.id === userID) ?
                    <ul>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone || "No Phone Available"}</li>
                    </ul> :
                    <button>Request Follow</button>
                }
            </div>
            <div>
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Event 1</li>
                    <li>Event 2</li>
                </ul>
            </div>
            {loggedInUser
            ? <button>Request a Match</button>
            : <p>Login to request a match</p>}
        </div>
    ) : (
        <div>
            <h1>Loading</h1>
        </div>
    );
}