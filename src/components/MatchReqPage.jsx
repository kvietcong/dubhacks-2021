import { doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../config/firebase";
// import { useParams } from "react-router";
// import { setUser } from "../utils/userUtils";
// import useUser from "../hooks/useUser";
import { Context } from "../Context";
import { useContext, useState } from "react";

export default function MatchReqPage() {
    const { userID } = useContext(Context);
    const userRef = doc(db, `users/${userID}`);
    const [ preferredSports, setPreferredSports ] = useState([]);

    // Variables for checking if certain buttons are clicked
    var spBadmClicked = false;
    var spTablClicked = false;
    var spTennClicked = false;
    var tyCompClicked = false;
    var tyCasClicked = false;
    var mClicked = false;
    var fClicked = false;
    var oClicked = false;

    // Change color of clicked/unclicked button
    function flipBool(clicked, id) {
        clicked = !clicked;
        if (clicked) {
            // document.getElementById(id).style = 1;
        } else {
            // document.getElementById(id).style = 2;
        }
    }

    // When called, adds new row to enter in time
    function addTimeRow() {
        // node.insertAdjacentHTML('afterbegin', '<div id="totalTime"> <select id="dayof-week" className="match-sel"> <option value="sunday">Sunday</option> <option value="monday">Monday</option>  <option value="tuesday">Tuesday</option> <option value="wednesday">Wednesday</option> <option value="thursday">Thursday</option> <option value="friday">Friday</option> <option value="saturday">Saturday</option> </select> Start: <input type="number" className="start-time" min="0000" max="2399"></input> End:  <input type="number" className="end-time" min="0000" max="2399"></input> </div>');
        return (
            <div id="totalTime">
                <select id="dayof-week" className="match-sel">
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                </select>
                Start:
                <input type="number" className="start-time" min="0000" max="2399"></input>
                End:
                <input type="number" className="end-time" min="0000" max="2399"></input>
            </div>
        );
    }

    // Update fields in database
    function updateF() {
        // Set sports to clicked-on sports
        if (spBadmClicked) {
            updateDoc(userRef, {sports: {badminton: {active: true}}});
        } else {
            updateDoc(userRef, {sports: {badminton: {active: false}}});
        }
        if (spTablClicked) {
            updateDoc(userRef, {sports: {tabletennis: {active: true}}});
        } else {
            updateDoc(userRef, {sports: {tabletennis: {active: false}}});
        }
        if (spTennClicked) {
            updateDoc(userRef, {sports: {tennis: {active: true}}});
        } else {
            updateDoc(userRef, {sports: {tennis: {active: false}}});
        }

        // Set level of competitiveness
        let modes = [];
        if (tyCompClicked) {
            modes.push("competitive");
        }
        if (tyCasClicked) {
            modes.push("casual");
        }
        setDoc(userRef, {preferences: {mode: modes}});

        // Set preferred genders to play with
        let genders = [];
        let gClicked = [mClicked, fClicked, oClicked];
        let names = ["male", "female", "other"]
        for (let i = 0; i < gClicked.length; i++) {
            if (gClicked[i]) {
                genders.push(names[i]);
            }
        }
        setDoc(userRef, {preferences: {gender: genders}});

        // Set times available to play with all things
        // let days = document.getElementsByClassName("match-sel");
        // let starts = document.getElementsByClassName("start-time");
        // let ends = document.getElementsByClassName("end-time");
        // for (let i = 0; i < days.length; i++) {
        //     if (days[i] === "sunday") {

        //     } else if (days[i] === "monday") {

        //     } else if (days[i] === "tuesday") {

        //     } else if (days[i] === "wednesday") {

        //     } else if (days[i] === "thursday") {

        //     } else if (days[i] === "friday") {

        //     } else if (days[i] === "saturday") {

        //     }
        // }

        // Update database with new information about user
        // setUser(userID, data);
    }

    return (
        <div>
            <div>
                <h2>Sport</h2>
                <div>
                    <button id="sp-badm" className="match-but" onClick={() => flipBool(spBadmClicked, "sp-badm")}>
                        Badminton
                    </button>
                    <button id="sp-tabl" className="match-but" onClick={() => flipBool(spTablClicked, "sp-tabl")}>
                        Table Tennis
                    </button>
                    <button id="sp-tenn" className="match-but" onClick={() => flipBool(spTennClicked, "sp-tenn")}>
                        Tennis
                    </button>
                </div>
            </div>

            <div>
                <h2>Type</h2>
                <div>
                    <button id="ty-comp" className="match-but" onClick={() => flipBool(tyCompClicked, "ty-comp")}>
                        Competitive
                    </button>
                    <button id="ty-cas" className="match-but" onClick={() => flipBool(tyCompClicked, "ty-cas")}>
                        Casual
                    </button>
                </div>
            </div>

            <div>
                <h2>Gender</h2>
                <div>
                    <button id="m" className="match-but" onClick={() => flipBool(mClicked, "m")}>
                        Male
                    </button>
                    <button id="f" className="match-but" onClick={() => flipBool(fClicked, "f")}>
                        Female
                    </button>
                    <button id="o" className="match-but" onClick={() => flipBool(oClicked, "o")}>
                        Other
                    </button>
                </div>
            </div>

            <div>
                <h2>Time</h2>
                <div>
                    <div id="addHere">ooo</div>
                    <button id="plus" className="plus-but" onClick={() => addTimeRow()}>
                        +
                    </button>
                </div>
            </div>
            <button className="enter" onClick={() => updateF()}>
                Submit Matchify Request
            </button>
        </div>
    )
}