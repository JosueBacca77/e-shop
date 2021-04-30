import {useContext} from 'react'
import {auth} from './Data/index'

const AuthContext = useContext(contextValue)

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState()

    const value = {
        currentUser,
        signup
    }
    
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signin(email, password){
        return auth.signInWithEmailAndPassword(email, password)
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
            {!loading && children}
        </AuthContext.Provider>
    )
}