import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(''); 

    //user create 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // userLogin 
    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    // login with google 
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider) 
    }

    // update user profile 
    const updateUser = (user)=>{
        return updateProfile(auth.currentUser,user)
    }

    // user log out 
    const logoutUser = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        userLogin,
        updateUser,
        logoutUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;