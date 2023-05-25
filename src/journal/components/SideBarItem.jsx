import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({
  id,
  title = '',
  body,
  date,
  imagesUrls = [],
}) => {
  const dispatch = useDispatch();
  const onVerNota = () => {
    dispatch(setActiveNote({ id, title, body, date, imagesUrls }));
  };
  const newTitle = useMemo(() => {
    return title.length > 14 ? title.substring(0, 14) + '...' : title;
  }, [title]);

  return (
    <ListItem disablePadding>
      |
      <ListItemButton onClick={onVerNota}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
