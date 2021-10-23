import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const useMatch = matchID => {
    const [ match, setMatch ] = useState([]);
    useEffect(() => {
        let matchRef = doc(db, `matches/${matchID}`);

        const unsubscribe = onSnapshot(matchRef, snapshot => {
            setMatch({ id: snapshot.id, ...snapshot.data() });
        });

        return unsubscribe;
    }, [ matchID ]);

    return match;
};

export default useMatch;