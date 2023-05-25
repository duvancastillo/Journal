import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase';

export const loadNotes = async (id) => {
  const collectionRef = collection(FirebaseDB, `${id}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];

  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  return notes;
};
