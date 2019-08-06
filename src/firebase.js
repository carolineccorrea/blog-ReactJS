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
        this.app = app.database();
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email,password)
    }

    async register(name,email,password){
        await app.auth().createUserWithEmailAndPassword(email,password);
        const uid = app.auth().currentUser.uid;
        return app.database().ref('usuarios').child(uid).set({
            nome: name, email: email, password: password
        })
    }

    isInit(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        })
    }

    getCurrent(){
        //verifica se a pessoa está logada
        return app.auth().currentUser &&  app.auth().currentUser.email
    }

}

export default new Firebase();