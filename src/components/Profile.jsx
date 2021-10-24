import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../Context";
import Heading from "./Heading";

export default function Profile() {
    const history = useHistory();
    const { user } = useContext(Context);
    useEffect(() => !user && history.push("/"), [ user, history ]);

    return (
        <div>
            <Heading />
            <section>
                <h2>Current Requests</h2>
                <ul>
                    <li>Req 1</li>
                    <li>Req 2</li>
                    <li>Req 3</li>
                </ul>
            </section>
            <section>
                <h2>Pending Invitations</h2>
                <ul>
                    <li>Inv 1</li>
                    <li>Inv 2</li>
                    <li>Inv 3</li>
                </ul>
            </section>
            <section>
                <h2>Match History</h2>
                <ul>
                    <li>Judah Losing Part 1</li>
                    <li>Judah Losing Part 2</li>
                    <li>Judah Losing Part 3</li>
                </ul>
            </section>
        </div>
    );
};