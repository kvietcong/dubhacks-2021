import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useSpring, animated } from "react-spring";
import { capitalizeAllWords } from "../utils/general";
import { Link } from "react-router-dom";

export default function SideMenu() {
    const { user, isShowingSidebar, setIsShowingSideBar } = useContext(Context);
    const [ styles, api ] = useSpring(() => ({
        opacity: 0,
        left: "-100%"
    }));

    const [ selectedSport, setSelectedSport ] = useState("");
    useEffect(() => {
        api.start({
            opacity: isShowingSidebar ? 1 : 0,
            left: isShowingSidebar ? "0%" : "-100%"
        });
    }, [ isShowingSidebar, api ]);

    return (
        <animated.div
            style={{
                ...styles,
                position: "absolute",
                height: "100vh",
                width: "100vw",
                top: 0,
                display: "flex",
            }}
            id="side-menu"
        >
            <div
                style={{
                    backgroundColor: "white",
                    height: "100vh",
                    width: "35%",
                    minWidth: "275px",
                }}
            >
                {console.log(user) || user ? <>
                    <img src={user.profilePicture} alt="Profile Portrait" />
                    <h2>{user.displayName}</h2>
                    <select
                        value={selectedSport}
                        onChange={event => setSelectedSport(event.target.value)}
                        onLoad={event => setSelectedSport(event.target.value)}
                    >
                        <option value="">Choose a Sport</option>
                        {Object.entries(user.sports).map(([sport, _]) =>
                            <option key={sport} value={sport}>
                                {capitalizeAllWords(sport)}
                            </option>
                        )}
                    </select>
                    {selectedSport && <p>Rating: {user.sports[selectedSport].rating}</p>}
                </>
                    :
                    <Link to="/login">Login to Matchify</Link>
                }
            </div>
            <div
                style={{
                    backgroundColor: "#000000AA",
                    width: "65%",
                }}
                onClick={() => setIsShowingSideBar(false)}
            >

            </div>
        </animated.div>
    );
}