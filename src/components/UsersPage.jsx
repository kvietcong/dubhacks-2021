import useFirestoreCollection from "../hooks/useFirestoreCollection";
import { Link } from "react-router-dom";
import { capitalizeAllWords } from "../utils/general";

export default function UsersPage() {
    const users = useFirestoreCollection("users");

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users?.map(user => <li key={user.id}>
                    <Link to={`users/${user.id}`}>{user.displayName}</Link>
                    <details>
                        <summary>Sports</summary>
                        <ul>
                            {Object.entries(user?.sports).map(([sport, elo]) =>
                                <li key={sport}>
                                    {capitalizeAllWords(sport)}: {elo}
                                </li>
                            )}
                        </ul>
                    </details>
                </li>)}
            </ul>
        </div>
    );
}