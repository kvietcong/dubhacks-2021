import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const useUser = userID => {
    const [ user, setUser ] = useState([]);
    useEffect(() => {
        let userRef = doc(db, `users/${userID}`);

        const unsubscribe = onSnapshot(userRef, snapshot => {
            setUser({ id: snapshot.id, ...snapshot.data() });
        });

        return unsubscribe;
    }, [ userID ]);

    return user;
};

export default useUser;