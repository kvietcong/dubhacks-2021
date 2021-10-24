import { useContext } from "react";
import { Context } from "../Context";

export default function Heading() {
    const { setIsShowingSideBar } = useContext(Context);

    return (
        <div className="heading-container" onClick={() => setIsShowingSideBar(true)}>
            <span className="menu">
                <img src="resources/lines.svg" alt="menu"></img>
            </span>
            <h1 className="heading">Matchify</h1>
        </div>
    );
};