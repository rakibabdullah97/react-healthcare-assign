import { useEffect, useState } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    };
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                    .finally(() => setIsLoading(false))
            })
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

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                
            })
    }
     
    const handleUserLogin =(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            setUser(result.user)
        })
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        handleUserRegister,
        handleUserLogin,
        logOut,

    };

}

export default useFirebase