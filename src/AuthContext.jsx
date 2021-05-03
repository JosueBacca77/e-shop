import {createContext, useContext, useState, useEffect} from 'react'
import {auth} from './Data/index'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState()

    const value = {
        currentUser,
        signup,
        signin,
        logout
    }
    
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signin(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user=>{
           setCurrentUser(user)
           setLoading(false)
        })

        return unsuscribe
    
    }, [])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}