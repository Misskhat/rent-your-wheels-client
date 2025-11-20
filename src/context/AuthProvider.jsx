import React, {useEffect, useState} from "react";
import {AuthContext} from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {auth} from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // sign up user for register
    const signUpUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signup or signin google popup
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // sign in existing user
    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logOut user
    const logOutUser = () => {
        return signOut(auth);
    };

    //Observer setup
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        signUpUser,
        signInUser,
        googleSignIn,
        logOutUser,
        user,
        loader,
    };
    return <AuthContext value={authInfo}> {children} </AuthContext>;
};

export default AuthProvider;
