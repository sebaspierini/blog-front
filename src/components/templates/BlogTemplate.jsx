import { Box } from '@mui/material';
import React from 'react';
import { Header, Footer } from '../organisms';

export const BlogTemplate = ({children}) => {
  return (
    <Box sx={{ display: 'grid' }}>

        <Header />

        <Box 
            component='main'
            sx={{ flexGrow: 2 }}
        >

            { children }
            
        </Box>

        <Footer />
    </Box>
  )
}
