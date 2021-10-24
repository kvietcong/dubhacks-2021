import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../Context";
import Heading from "./Heading";

export default function Home() {
    const history = useHistory();
    const { user, availableMatches } = useContext(Context);
    useEffect(() => !user && history.push("/"), [ user, history ]);

    console.log(availableMatches);

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
                        {Object.entries(availableMatches).map(([person, data]) =>
                            //  how get person??

                            // todo: new entry for each compatible sport
                            <li className="Home-match">
                                {<img src={`/resources/${data["sports"][0]}.svg`} alt={data["sports"][0]} />}

                                {data["name"]} ({data["rating"]}) - {data["mode"]}
                            </li>
                        )}
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