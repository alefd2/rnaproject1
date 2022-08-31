import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from './shared/themes/Light';
import SnackbarProvider from './shared/components/Snackbar';
import { DrawerMenu } from './shared/components/drawermenu/DrawerMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <BrowserRouter>
          <DrawerMenu>
            <App />
          </DrawerMenu>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode >
)
