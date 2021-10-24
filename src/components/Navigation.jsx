import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function Navigation() {
    const { user } = useContext(Context);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Go Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to={user ? "/profile" : "/login"}>
                        {user ? `Hello ${user.displayName}` : "Login"}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};