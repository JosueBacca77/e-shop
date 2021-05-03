import firebasse from 'firebase/app'
import '@firebase/firestore'
import 'firebase/auth'

//const admin = require('firebase-admin');
//const app = admin.initializeApp({
const app = firebasse.initializeApp({
    apiKey: "AIzaSyB_Pa5RW2TcPfl9S6hCyjdOrrimp2OS0uk",
    authDomain: "electronic-shop-5d783.firebaseapp.com",
    projectId: "electronic-shop-5d783",
    storageBucket: "electronic-shop-5d783.appspot.com",
    messagingSenderId: "582474805810",
    appId: "1:582474805810:web:8d632811b3199ae0db422b"
})

export function getFirebase(){
    return app
}

export function getFireStore(){
    return firebasse.firestore(app)
}

export const auth = app.auth()
