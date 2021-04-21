import firebasse from 'firebase/app'
import '@firebase/firestore'
import 'firebase/auth'


const app = firebasse.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
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

//export const auth = app.auth()