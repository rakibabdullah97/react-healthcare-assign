import { useEffect, useState } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    ///google sign method implemented
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };
    //log out implemented
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    //register method implemented
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    //login method implemented
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return {
        user,
        error,
        isLoading,
        setError,
        signInUsingGoogle,
        handleUserRegister,
        handleUserLogin,
        logOut,

    };

}

export default useFirebase