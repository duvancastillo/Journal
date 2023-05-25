import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import {
  addNewEmptyNote,
  creatingNewNote,
  setActiveNote,
  setNote,
  setSavid,
  updateNote,
} from './journalSlice';
import { loadNotes } from '../../helpers';

export const starNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    dispatch(creatingNewNote());
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};
export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await loadNotes(uid);
    dispatch(setNote(notes));
  };
};

export const starSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSavid);
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFirebase = { ...note };
    delete noteToFirebase.id;
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirebase);

    dispatch(updateNote(note));
  };
};
