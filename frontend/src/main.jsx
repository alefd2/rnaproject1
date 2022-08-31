import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from './shared/themes/Light';
import SnackbarProvider from './shared/components/Snackbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode >
)
