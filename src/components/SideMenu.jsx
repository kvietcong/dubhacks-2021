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
                {user ? <>
                    <div className="SideMenu-bar">
                        <div className="SideMenu-top">
                            <img src={user.profilePicture} alt="Profile Portrait" />
                            <div className="SideMenu-right">
                                <h2 style={{display:"inline"}}>{user.displayName}</h2>
                                <div className="SideMenu-rating">
                                    <img src="resources/star.svg" alt="star"/>
                                    <h4>{user.communityRating / 10}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="Profile-selector Profile-container" style={{marginTop:"20px"}}>
                            <div className="Profile-selector-img">
                                {selectedSport && <img src={`/resources/${selectedSport}.svg`} alt={selectedSport} />}
                            </div>
                            <select
                                value={selectedSport}
                                onChange={event => setSelectedSport(event.target.value)}
                                onLoad={event => setSelectedSport(event.target.value)}
                            >
                                <option value="">Choose a Sport</option>
                                { user.sports && (Object.entries(user.sports).map(([sport, _]) =>
                                    <option key={sport} value={sport}>
                                        {capitalizeAllWords(sport)}
                                    </option>
                                ))}
                            </select>
                            {selectedSport && <p>Rating: {user.sports[selectedSport]?.rating}</p>}
                        </div>
                    </div>
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