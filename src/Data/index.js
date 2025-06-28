import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB_Pa5RW2TcPfl9S6hCyjdOrrimp2OS0uk",
    authDomain: "electronic-shop-5d783.firebaseapp.com",
    projectId: "electronic-shop-5d783",
    storageBucket: "electronic-shop-5d783.appspot.com",
    messagingSenderId: "582474805810",
    appId: "1:582474805810:web:8d632811b3199ae0db422b"
}

const app = initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFireStore(){
    return getFirestore(app)
}

export const auth = getAuth(app)
