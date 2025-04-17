import { app, firestore } from '../../firebaseConfig.js';
import { collection, doc, setDoc, getDoc, getDocs, updateDoc, Timestamp } from 'firebase/firestore';

export const fireUpdateData = async(id, data) => {
    const userDocRef = doc(collection(firestore, "Users"), id);
    const value = {
        foodTruckString: data
    }

    try {
        await setDoc(userDocRef, value);
        console.log("Document written with ID: ", id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}