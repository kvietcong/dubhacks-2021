// import { db } from "../config/firebase";
// import { useContext } from "react";
// import { useParams } from "react-router"
// import { Context } from "../Context";
// import useUser from "../hooks/useUser";

export default function MatchReqPage() {
    // const { id: userID } = useParams();
    // const user = useUser(userID);
    // const { user: currentUser } = useContext(Context);
    // const cityRef = db.collection('cities').doc(userID)

    // Change color of clicked/unclicked button
    function buttonClick(id) {
        // const sty = document.getElementById(id).style;
        // // if (sty == 1) {
        // //     sty = 2;
        // // } else {
        // //     sty = 1;
        // // }
    }

    // When called, adds new row to enter in time
    function addTimeRow() {
        return (
            <div>
                <select id="dayof-week" className="match-sel">
                    <option value="Su">Sunday</option>
                    <option value="M">Monday</option>
                    <option value="Tu">Tuesday</option>
                    <option value="W">Wednesday</option>
                    <option value="Th">Thursday</option>
                    <option value="F">Friday</option>
                    <option value="Sa">Saturday</option>
                </select>
                 Start: 
                <input type="time" id="start-time"></input>
                 End:
                <input type="time" id="end-time"></input>
            </div>
        )
    }

    // Update fields in database
    function updateF() {
        // if (document.getElementById("sp-badm").style == 2) {

        // }
    }
    
    return (
        <div>
            <div>
                <h2>Sport</h2>
                <div>
                    <button id="sp-badm" className="match-but" onClick={buttonClick("sp-badm")}>
                        Badminton
                    </button>
                    <button id="sp-table" className="match-but" onClick={buttonClick("sp-table")}>
                        Table Tennis
                    </button>
                    <button id="sp-tennis" className="match-but" onClick={buttonClick("sp-tennis")}>
                        Tennis
                    </button>
                </div>
            </div>

            <div>
                <h2>Type</h2>
                <div>
                    <button id="ty-comp" className="match-but" onClick={buttonClick("ty-comp")}>
                        Competitive
                    </button>
                    <button id="ty-cas" className="match-but" onClick={buttonClick("ty-cas")}>
                        Casual
                    </button>
                </div>
            </div>

            <div>
                <h2>Gender</h2>
                <div>
                    <button id="m" className="match-but" onClick={buttonClick("m")}>
                        Male
                    </button>
                    <button id="f" className="match-but" onClick={buttonClick("f")}>
                        Female
                    </button>
                    <button id="o" className="match-but" onClick={buttonClick("o")}>
                        Other
                    </button>
                </div>
            </div>

            <div>
                <h2>Time</h2>
                <div>
                    <button id="plus" className="plus-but" onclick={addTimeRow()}>
                        +
                    </button>
                </div>
            </div>
            <div className="enter" onClick={updateF()}>
                Submit Matchify Request
            </div>
        </div>
        
    )
}