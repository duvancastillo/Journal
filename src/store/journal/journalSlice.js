import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSavid: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'ABC123',
    //   title: '',
    //   body: '',
    //   date: '12323435',
    //   imagesUrls: [],
    // },
  },
  reducers: {
    creatingNewNote: (state, action) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSavid = '';
    },
    setNote: (state, action) => {
      state.notes = action.payload;
    },
    setSavid: (state) => {
      state.isSaving = true;
      state.messageSavid = '';
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imagesUrls = [...state.active.imagesUrls, ...action.payload];
      state.isSaving = false;
    },
    claerNooteLogout: (state) => {
      (state.isSaving = false),
        (state.active = null),
        (state.notes = []),
        (state.messageSavid = '');
    },

    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });
      state.messageSavid = `${action.payload.title}, se actualizo correctamente`;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
  },
});
export const {
  deleteNoteById,
  addNewEmptyNote,
  claerNooteLogout,
  setActiveNote,
  setNote,
  setSavid,
  updateNote,
  deleteNote,
  creatingNewNote,
  setPhotosToActiveNote,
} = journalSlice.actions;
