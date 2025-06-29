import {createContext, useContext, useState, useEffect} from 'react'
import {auth} from './Data/index'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState()

    const value = {
        currentUser,
        signup,
        signin,
        logout
    }
    
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signin(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user=>{
           setCurrentUser(user)
        })

        return unsuscribe
    
    }, [])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}