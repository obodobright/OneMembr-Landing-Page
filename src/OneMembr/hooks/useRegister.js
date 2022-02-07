import React, { useState } from "react";
import { firestore } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const Register = async(username, email) => {
        try {
            setLoading(true);
            const collectionRef = collection(firestore, "userData");
            const payload = { username, email };
            await addDoc(collectionRef, payload);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError("An error occured, please try again");
        }
    };
    return { loading, error, Register };
};