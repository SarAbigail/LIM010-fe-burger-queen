import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCm5JWgQ3Vm4X2a7Q7ZCz6aqOp1gHcTzI",
    authDomain: "burger-queen-react-bls.firebaseapp.com",
    databaseURL: "https://burger-queen-react-bls.firebaseio.com/",
    projectId: "burger-queen-react-bls",
    storageBucket: "burger-queen-react-bls.appspot.com",
    messagingSenderId: "658478814346",
    appId: "1:658478814346:web:f4bf5219e89878fd114973"
};
firebase.initializeApp(firebaseConfig);

export default firebase;