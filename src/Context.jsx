import { db } from "./config/firebase";
import { doc, onSnapshot } from "@firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import useMatchMaking from "./hooks/useMatchmaking";

const Context = createContext();

const ContextProvider = props => {
    const [ user, setUser ] = useState(null);
    const [ userID, setUserID ] = useState("");
    const [ isDarkMode, setIsDarkMode ] = useState(true);
    const [ isShowingSidebar, setIsShowingSideBar ] = useState(false);
    const availableMatches = useMatchMaking(userID);

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
            isShowingSidebar, setIsShowingSideBar,
            availableMatches,
        }}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
