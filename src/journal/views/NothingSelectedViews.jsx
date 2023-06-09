import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedViews = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate_faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 110px)`, backgroundColor: 'primary.main' }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          cren una nueva entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
