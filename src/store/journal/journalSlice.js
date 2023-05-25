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
    deleteNote: (state, action) => {},
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSavid,
  updateNote,
  deleteNote,
  creatingNewNote,
} = journalSlice.actions;
