import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../Context";
import Heading from "./Heading";

export default function Home() {
    const history = useHistory();
    const { user } = useContext(Context);
    useEffect(() => !user && history.push("/"), [ user, history ]);

    return (
        <div>
            <Heading />
            <section>
                <h2 className="Home-heading">Current Requests</h2>
                <div className="Home-info">
                    <ul>
                        <li>Req 1</li>
                        <li>Req 2</li>
                        <li>Req 3</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="Home-heading">Pending Invitations</h2>
                <div className="Home-info">
                    <ul>
                        <li>Inv 1</li>
                        <li>Inv 2</li>
                        <li>Inv 3</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="Home-heading">Match History</h2>
                <div className="Home-info">
                    <ul>
                        <li>Judah Losing Part 1</li>
                        <li>Judah Losing Part 2</li>
                        <li>Judah Losing Part 3</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};