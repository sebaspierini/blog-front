import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';

export const Header = () => {
  const {logout, logged, user} = useContext(AuthContext)
  const navigate = useNavigate()
  const onLogout = () => {
    logout()
    navigate('/auth/login', {replace: true})
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          
          {logged ? 
            (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {user.name}
                </Typography><Button color="inherit" onClick={onLogout}>Logout</Button>
              </>
            ) : 
            <Button component={RouterLink} color="inherit" to='/auth/login'>Login</Button>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}
