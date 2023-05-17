import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { starUserwithEmailPassword } from '../../store/auth';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formaValidations = {
  email: [(value) => value.includes('@'), 'el correo debe llevar @'],
  password: [
    (value) => value.length >= 6,
    'la contraseña debe tener minimo 6 caracteres',
  ],
  displayName: [(value) => value.length >= 1, 'el nombre es obligatorio'],
};

export const RegistrePage = () => {
  const { status, errorMesage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formSubitEd, setformSubitEd] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    formState,
  } = useForm(formData, formaValidations);
  console.log(errorMesage);

  const isAuthencating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    setformSubitEd(true);
    if (!isFormValid) return;
    dispatch(starUserwithEmailPassword(email, password, displayName));
  };

  return (
    <AuthLayout title="crear cuenta">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate_faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="nombre"
              type="text"
              placeholder="nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubitEd}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubitEd}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubitEd}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} display={!!errorMesage ? '' : 'none'}>
              <Alert severity="error"> {errorMesage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthencating}
              >
                crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿ya tienes una cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
