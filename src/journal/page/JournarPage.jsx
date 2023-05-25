import { IconButton, Typography } from '@mui/material';
import { JurnarlLayout } from '../layout/JurnarlLayout';
import { NoteView, NothingSelectedViews } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { starNewNote } from '../../store/journal';

export const JournarPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const onNewNotas = () => {
    dispatch(starNewNote());
  };

  return (
    <JurnarlLayout>
      {!!active ? <NoteView /> : <NothingSelectedViews />}
      <IconButton
        disabled={isSaving}
        onClick={onNewNotas}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JurnarlLayout>
  );
};
