import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDU06uu4lRKGI-UH8NhbL9kEScfdig4ogk",
  authDomain: "car-sale-react.firebaseapp.com",
  projectId: "car-sale-react",
  storageBucket: "car-sale-react.appspot.com",
  messagingSenderId: "388596123777",
  appId: "1:388596123777:web:d0268b8694fd627be92580"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){

    return firebase.firestore(app)
}