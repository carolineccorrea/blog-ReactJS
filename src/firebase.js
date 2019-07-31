import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAVIea4BY9L-TjaRVPe2aY741cIhcYiw3c",
    authDomain: "blog-370e8.firebaseapp.com",
    databaseURL: "https://blog-370e8.firebaseio.com",
    projectId: "blog-370e8",
    storageBucket: "",
    messagingSenderId: "64367019274",
    appId: "1:64367019274:web:48ace680ad6d97e4"
  };


class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email,password)
    }

    async register(name,email,password){
        await app.auth().createUserWithEmailAndPassword(email,password);
        const uid = app.auth().currentUser.uid;
        return app.database().ref('usuarios').child(uid).set({
            nome: name
        })
    }

    isInit(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        })
    }

}

export default new Firebase();