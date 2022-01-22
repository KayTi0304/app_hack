import logo from './logo.svg';
import './App.css';

//
// firebase bullshit
//

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXrS6KP5X30KmOWuk5Qtn2sreqTtX8qGA",
  authDomain: "hackapp-50a6f.firebaseapp.com",
  projectId: "hackapp-50a6f",
  storageBucket: "hackapp-50a6f.appspot.com",
  messagingSenderId: "813001492442",
  appId: "1:813001492442:web:e92a0ab7351219955022e3",
  measurementId: "G-SQ6F12RNC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// const dbRef = app.database().ref();
// const usersRef = dbRef.child('example');

async function dummygetdb() {
  // const dbRef = collection(db, 'example');
  // const citySnapshot = await getDocs(dbRef);
  // const cityList = citySnapshot.docs.map(doc => doc.data());
  // return cityList;

  // ADD DATA
  try {
    // writes dummmy data to exampleclear

    // const docRef = await addDoc(collection(db, "exampleclear"), {
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  // READ DATA
  // const querySnapshot = await getDocs(collection(db, "exampleclear"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data().born}`);
  // });
}

function App() {
  dummygetdb()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
