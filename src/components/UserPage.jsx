import { useContext } from "react";
import { useParams } from "react-router"
import { Context } from "../Context";
import useUser from "../hooks/useUser";
import { capitalizeAllWords } from "../utils/general";

export default function UserPage() {
    const { id: userID } = useParams();
    const user = useUser(userID);
    const { user: currentUser } = useContext(Context);

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
                <h2>Sports</h2>
                <ul>
                    {Object.entries(user.sports).map(([sport, score]) =>
                        <li key={sport}>
                            {capitalizeAllWords(sport)} with {score} Elo
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <h2>Contact Info</h2>
                {!currentUser ? <p>Login to Follow This User</p> :
                user.following.map(({id}) => id)
                    .includes(currentUser.id) || (currentUser.id === userID) ?
                    <ul>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                    </ul> :
                    <button>Request Follow</button>
                }
            </div>
            <div>
                <h2>Pending Events</h2>
                <ul>
                    <li>Event 1</li>
                    <li>Event 2</li>
                </ul>
            </div>
            {currentUser
            ? <button>Request a Match</button>
            : <p>Login to request a match</p>}
        </div>
    ) : (
        <div>
            <h1>Loading</h1>
        </div>
    );
}