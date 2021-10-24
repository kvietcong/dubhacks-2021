import "../App.css";
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Heading from "./Heading";

export default function Landing() {
    const { user, userID, setUserID, availableMatches } = useContext(Context);

    return (
        <div>
            <Heading />
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
            <br/>
            <button onClick={() => console.log(availableMatches)}>print avail matches</button>
            <br/>
            <button onClick={() => console.log(user)}>print logged in user</button>
        </div>
    )
}