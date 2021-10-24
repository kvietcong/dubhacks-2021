import { db } from "./config/firebase";
import { doc, onSnapshot } from "@firebase/firestore";
import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = props => {
    const [ user, setUser ] = useState(null);
    const [ userID, setUserID ] = useState(null)
    const [ isDarkMode, setIsDarkMode ] = useState(true);

    useEffect(() => {
        const userRef = doc(db, `users/${userID || "baka"}`);
        const unsubscribe = onSnapshot(userRef, snapshot => {
            const userID = snapshot.id;
            const userData = snapshot.data();
            setUser(userData
                ? { id: userID, ...userData }
                : null
            );
        });
        return unsubscribe;
    } , [ userID ]);

    return (
        <Context.Provider value={{
            user, setUser,
            userID, setUserID,
            isDarkMode, setIsDarkMode,
        }}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
