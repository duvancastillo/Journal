import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import {
  addNewEmptyNote,
  creatingNewNote,
  deleteNoteById,
  setActiveNote,
  setNote,
  setPhotosToActiveNote,
  setSavid,
  updateNote,
} from './journalSlice';
import { loadNotes, uploadFile } from '../../helpers';

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
    dispatch(setSavid());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFirebase = { ...note };
    delete noteToFirebase.id;
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirebase);

    dispatch(updateNote(note));
  };
};

export const starUploadingFile = (files = []) => {
  return async (dispatch) => {
    dispatch(setSavid());

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(uploadFile(file));
    }
    const photoUrl = await Promise.all(fileUploadPromises);
    console.log(photoUrl);
    dispatch(setPhotosToActiveNote(photoUrl));
  };
};

export const starDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
  };
};
