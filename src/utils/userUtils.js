import { doc, setDoc, addDoc, collection } from "@firebase/firestore";
import { db } from "../config/firebase";

export const initializeUser = (displayName, profilePicture, email) => {
    return {
        availability: {
            "monday": [],
            "tuesday": [],
            "wednesday": [],
            "thursday": [],
            "friday": [],
            "saturday": [],
            "sunday": [],
        },
        communityRating: 0,
        displayName: displayName,
        profilePicture: profilePicture,
        following: [],
        phone: null,
        email: email,
        sports: {
            "badminton": [],
            "table_tennis": [],
            "tennis": []
        },
        preferences: {
            "gender": [],
            "mode": [],
        },
        pendingMatches: {},
    };
};

export const setUser = (userID, newUserData) => {
    const userRef = doc(db, "users", userID);
    setDoc(userRef, newUserData);
    return userRef;
};

export const addUser = newUserData => {
    const newUserRefPromise = addDoc(collection(db, "users"), newUserData);
    return newUserRefPromise;
};

export const createNewUser = async (displayName, profilePicture, email) => {
    const newUserData = initializeUser(displayName, profilePicture, email);
    const newUserRef = await addUser(newUserData);
    return newUserRef;
};

export const checkFollowing = (user, userID) => {
    return user.following.map(({id}) => id).includes(userID);
};