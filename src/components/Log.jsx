import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCridential) => {
        console.log(userCridential);
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, { autoClose: 500, position: "top-right" });
      });
  };

  const sendVerificationEmail = () => {
    console.log(auth);

    const user = auth.currentUser;

    sendEmailVerification(user)
      .then(() => {
        console.log("Email verification sent");
        toast("Email verification sent", {
          autoClose: 500,
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, { autoClose: 500, position: "top-right" });
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, { autoClose: 500, position: "top-right" });
      });
  };
  return (
    <div>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your passwrd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={sendVerificationEmail}>Send email verification</button>

      <button onClick={handleSignOut}>Log Out</button>
    </div>
  );
}

export default Log;
