import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn8FbnFp_JPJaYVQdgrm_l9_ZpOUPPZKo",
  authDomain: "agentx-82d34.firebaseapp.com",
  projectId: "agentx-82d34",
  storageBucket: "agentx-82d34.appspot.com",
  messagingSenderId: "117848686651",
  appId: "1:117848686651:web:74528636749b060ca09c1e",
  measurementId: "G-R411J8VKLY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const auth =app.auth();

//const res = createUserWithEmailAndPassword(auth, "cool@gmail.com", "Nuwan1234#")
export  {auth} ;