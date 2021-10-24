import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useUser = userID => {
    const [ user, setUser ] = useState(null);
    useEffect(() => {
        let userRef = doc(db, `users/${userID || "baka"}`);

        const unsubscribe = onSnapshot(userRef, snapshot => {
            setUser({ id: snapshot.id, ...snapshot.data() });
        });

        return unsubscribe;
    }, [ userID ]);

    return user;
};

export default useUser;