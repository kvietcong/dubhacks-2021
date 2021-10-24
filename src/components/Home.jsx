import "../App.css";
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function Home() {
    const { user, userID, setUserID } = useContext(Context);

    return (
        <div>
            <h1>Matchify</h1>
            <p>
                Competition as a Service (CaaS): The future of social software
                has come and we are here to exploit the living 💩 out of it.
            </p>
            <p>
                Move over Facebook and Google, Matchify has come to town.
            </p>
            <p>
                Click <Link to="/login">Here</Link> to Join
            </p>
            <input
                type="text" value={userID}
                onChange={event => setUserID(event.target.value)}
            />
        </div>
    )
}