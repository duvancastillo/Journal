import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import {
  DeleteOutline,
  SaveAltOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import {
  setActiveNote,
  starDeletingNote,
  starSavingNote,
  starUploadingFile,
} from '../../store/journal';

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSavid,
    isSaving,
  } = useSelector((state) => state.journal);
  const fileInputRef = useRef();
  const { body, title, date, formState, onInputChange } = useForm(note);
  const onInputFile = ({ target }) => {
    if (target.files === 0) return;
    dispatch(starUploadingFile(target.files));
  };

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSavid.length > 0) {
      Swal.fire('nota actualizada', messageSavid, 'success');
    }
  }, [messageSavid]);

  const onClickSavingNote = () => {
    dispatch(starSavingNote());
  };

  const onDelete = () => {
    dispatch(starDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={onInputFile}
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={isSaving}
          onClick={onClickSavingNote}
          color="primary"
          sx={{ Padding: 2 }}
        >
          <SaveAltOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid
        container
        className="animate__animated animate__fadeIn animate_faster"
      >
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="ingrese un titulo"
          label="Titulo"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿que sucedio el dia de hoy?"
          label="body"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          borrar
        </Button>
      </Grid>
      <ImageGallery images={note.imagesUrls} />
    </Grid>
  );
};
