import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkm54AeOWB7dQQyXl9d1JBjJGeTsYByGA",
    authDomain: "carros-7ba8d.firebaseapp.com",
    databaseURL: "https://carros-7ba8d-default-rtdb.firebaseio.com",
    projectId: "carros-7ba8d",
    storageBucket: "carros-7ba8d.appspot.com",
    messagingSenderId: "526330447662",
    appId: "1:526330447662:web:98d3358bb93de2d710dcbf",
    measurementId: "G-5ZNQLF3C3Q"
};
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()