//
// firebase BS
//

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
//import * as firestore from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

//
// Firestore
//
export async function writeFarmerEntry(farmerName, email, description, products) {
  await setDoc(doc(db, "farmer", farmerName), {
    name: farmerName,
    email: email,
    description: description,
    products: products
  });
} // writeFarmerEntry("foo", "foobar@gmail.com", "endless cornfields until you hate it forever", ["corn", "whatever"])
export async function writeManufacturerEntry(manufacturerName, email, description, products, ingredients) {
  await setDoc(doc(db, "manufacturer", manufacturerName), {
    name: manufacturerName,
    email: email,
    description: description,
    products: products,
    ingredients: ingredients
  });
}
export async function writeRestaurantEntry(restaurantName, email, description, ingredients) {
  await setDoc(doc(db, "restaurant", restaurantName), {
    name: restaurantName,
    email: email,
    description: description,
    ingredients: ingredients
  });
}
export async function deleteEntry(document, name) {
  await deleteDoc(doc(db, document, name));
}

// TODO non functional
export async function getFarmers() {
  const querySnapshot = await getDocs(collection(db, "farmer"));
  
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data().email)
  });

  return
}
// need funcs for:
// pair entity with category of entity
// queries single entity
// delete entry
export async function getEntity(document, name) {
  const docRef = doc(db, document, name);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return docSnap.data()
}

async function dummygetdb() {
  // const dbRef = collection(db, 'example');
  // const citySnapshot = await getDocs(dbRef);
  // const cityList = citySnapshot.docs.map(doc => doc.data());
  // return cityList;

  // ADD DATA
  // try {
    // writes dummmy data to exampleclear

    // const docRef = await addDoc(collection(db, "exampleclear"), {
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // });
    // console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  // READ DATA
  // const querySnapshot = await getDocs(collection(db, "exampleclear"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data().born}`);
  // });
}

//
// Authentication
//

const auth = getAuth();

export async function doSignup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('signed up');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export async function doLogin(email, password) {
  console.log('asdfasdf')
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('logged in');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}