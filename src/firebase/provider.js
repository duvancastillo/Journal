import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './firebase';
import { Email } from '@mui/icons-material';

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
    return { ok: false, errorMessage: error.message };
  }
};

export const registerUserWihtEmailPassword = async (
  email,
  password,
  displayName
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;
    console.log(uid);

    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok: true,
      uid,
      photoURL,
      email,
      password,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const LoginInWhithEmailAndPassword = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
      email,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  await FirebaseAuth.signOut();
};
