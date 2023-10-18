import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { AuthTemplate } from '../templates/AuthTemplate';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const onLogin = () => {
    login('Seba')
    navigate('/', {
      replace: true
    })
  }
  return (
    <AuthTemplate title="Login">
      <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@gmail.com' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            
            <Grid container direction='row' spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant='contained' fullWidth onClick={onLogin}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } sx={{textAlign: 'center'}}>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>

          </Grid>


        </form>

    </AuthTemplate>
  )
}
