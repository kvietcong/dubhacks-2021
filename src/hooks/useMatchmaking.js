import useUser from "./useUser";
import useFirestoreCollection from "./useFirestoreCollection";

const useMatchmaking = userID => {
    const user = useUser(userID);
    const users = useFirestoreCollection("users");

    if (!user?.email) return {};

    let result = {};

    for (let otherUser of users) {
        if (otherUser.id !== userID) {
            // need to compare: mode
            // gender meets gender prefs
            // sport
            // then finally check time availability
            let mode = "";
            if (otherUser.preferences.mode.includes("competitive") && user.preferences.mode.includes("competitive")) {
                mode = "competitive";
            } else if (otherUser.preferences.mode.includes("casual") && user.preferences.mode.includes("casual")) {
                mode = "casual";
            } else {
                continue;
            }

            if (!user.preferences.gender.includes(otherUser.gender) || 
                !otherUser.preferences.gender.includes(user.gender)) {
                continue;
            }

            // ratings logic goes here
            // todo: sports -> ratings map should be replaced with a map with more detailed info
            let sports = [];
            Object.entries(user.sports).forEach(([sport, rating]) => {
                if (sport in otherUser.sports) {
                    sports.push(sport);
                }
            });
            if (sports.length === 0) {
                continue;
            }

            let tempTimeOverlap = { }
            Object.entries(otherUser.availability).forEach(([day, availableTimes]) => {
                tempTimeOverlap[day] = [];

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

            if (!Object.keys(tempTimeOverlap).length) {
                continue;
            }

            result[otherUser.id] = {}
            result[otherUser.id]["time overlap"] = tempTimeOverlap;
            result[otherUser.id]["mode"] = mode;
            result[otherUser.id]["sports"] = sports; // can include multiple; should return multiple options to end user
            
        }
    }

    // return list of available match and times
    return result;
};

export default useMatchmaking;