import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth, firestore } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Reg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    //chot minh chi lam emai lvs passowrd sign up, con lai tu them vao trong user sau qua firestore

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        const user = userCredential.user;
        const userId = user.uid;
        user.phoneNumber = phoneNumber;

        const userDocRef = doc(firestore, "users", userId);

        // Save additional user information in Firestore
        setDoc(userDocRef, {
          email,
          phoneNumber,
          address,
        })
          .then(() => {
            console.log("User registered successfully");
            toast("User registered successfully", {
              autoClose: 500,
              position: "top-right",
            });
          })
          .catch((error) => {
            console.log(error);
            toast(error.message, { autoClose: 500, position: "top-right" });
          });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, { autoClose: 500, position: "top-right" });
      });
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Reg;
