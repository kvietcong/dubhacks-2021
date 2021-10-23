import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { onSnapshot, collection } from "firebase/firestore";

const useFirestoreCollection = collectionID => {
    const [ documents, setDocuments ] = useState([]);
    useEffect(() => {
        let collectionRef = collection(db, collectionID);

        const unsubscribe = onSnapshot(collectionRef, snapshot => {
            const newDocuments = [];
            snapshot.forEach(document => {
                newDocuments.push({ id: document.id, ...document.data() });
            });
            setDocuments(newDocuments);
        });

        return unsubscribe;
    }, [ collectionID ]);

    return documents;
};

export default useFirestoreCollection;