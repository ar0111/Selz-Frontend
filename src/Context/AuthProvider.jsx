import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const forgetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }

    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User Observing');
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        createUser,
        verifyEmail,
        signIn,
        forgetPassword,
        googleSignIn,
        logOut,
        updateUser,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;