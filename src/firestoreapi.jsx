import { db } from "./Backend";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "farmer");

class apiService {
  getUsers = () => {
    return getDocs(userCollectionRef);
  };

  getOneUser = (email) => {
    const userDoc = doc(db, "farmer", email);
    return getDoc(userDoc);
  };
}

export default new apiService();
