import React from 'react';
import { AppTheme } from './theme';
import { AppRouter } from './Router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';

export const App = () => {
  return (
    <AppTheme>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </AppTheme>
  )
}

