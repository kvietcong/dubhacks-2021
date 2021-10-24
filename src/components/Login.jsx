import { collection, where, query, getDocs, limit } from "@firebase/firestore";
import { db } from "../config/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Context } from "../Context";
import { createNewUser } from "../utils/userUtils";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export default function Login() {
    const { setUserID } = useContext(Context);

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            const { photoURL, displayName, email } = result.user;

            const usersRef = collection(db, "users");
            const existingQuery =
                query(usersRef, where("email", "==", email), limit(1));
            const snapshot = await getDocs(existingQuery)
            let existingUserID;
            snapshot.forEach(userDocument => existingUserID = userDocument.id);
            if (existingUserID) {
                setUserID(existingUserID)
            } else {
                const newUserRef =
                    await createNewUser(displayName, photoURL, email);
                setUserID(newUserRef.id);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login or Signup</h1>
            <button onClick={loginWithGoogle}>Login/Signup With Google</button>
        </div>
    );
}