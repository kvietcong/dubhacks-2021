import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { onSnapshot, doc, getDoc } from "firebase/firestore";
import useUser from "./useUser";
import useFirestoreCollection from "./useFirestoreCollection";

const useMatchmaking = userID => {
    const user = useUser(userID);
    const users = useFirestoreCollection("users");

    // console.log(user.length != 0 && getDoc(user.following[0]).then(
    //     (doc) => console.log(doc.data())
    // ));

    // { user : timeoverlap }
    let result = {};

    for (let otherUser of users) {
        if (otherUser.id != userID) {
            // first check availability
            //console.log(otherUser.availability);

            // day : [(start, end)]
            // day : [(start, end)]
            let tempTimeOverlap = { }
            Object.entries(otherUser.availability).forEach(([day, availableTimes]) => {
                tempTimeOverlap[day] = [];
                // console.log(user.availability[day]);
                // console.log(availableTimes); 

                // iterate through start/end tuples
                for (let time of availableTimes) {
                    // assume that no user's start and end times overlap. e.g. (500, 1000) and (600, 1100) is invalid.
                    let start = time["start"];
                    let end = time["end"]

                    // user start/end tuples
                    for (let time2 of user.availability[day]) {
                        let user_start = time2["start"];
                        let user_end = time2["end"]

                        if (start < user_end && start > user_start) {
                            tempTimeOverlap[day].push([start, Math.min(user_end, end)]);
                        }
                        if (user_start < end && user_start > start) {
                            tempTimeOverlap[day].push([user_start, Math.min(user_end, end)]);
                        }
                    }
                }
            });
            console.log(otherUser.id);
            result[otherUser.id] = tempTimeOverlap;
        }
    }

    //console.log(user.length != 0 && user.following[0].data());
    //console.log(users);

    // return list of available match and times
    console.log(result);
    return result;
};

export default useMatchmaking;