import { createTheme} from '@mui/material'
import {cyan, indigo } from '@mui/material/colors';

export const LigthTheme = createTheme({
    palette: {
        primary: {
            main: cyan[700],
            dark: cyan[900],
            light: cyan[400],
            contrastText: '#fff',
        }, 
        secondary: {
            main: indigo[700],
            dark: Indigo[900],
            light: Indigo[400],
            contrastText: '#fff',
        },
        background: {
            paper: '#fff',
            default: '#f7f6f3',
        }
    }
});