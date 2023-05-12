import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./firebase";

const googleAuthProvider = new GoogleAuthProvider();

export const singInwhithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { uid, displayName, photoURL, email } = result.user;
    return {
      ok: true,
      uid,
      displayName,
      photoURL,
      email,
    };
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage
    };
  }
};
