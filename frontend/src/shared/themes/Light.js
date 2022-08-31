import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { ptBR } from '@mui/material/locale';

const paletteOverride = createTheme({
  palette: {
    primary: {
      main: cyan[700],
      light: cyan[400],
      dark: cyan[900],
      contrastText: '#FFF'
    },
    secondary: {
      main: '#F0F0F0',
      light: '#5a6f91',
      contrastText: '#000000DE'
    },
    light: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#f6eeee',
      contrastText: '#0f0f0fde'
    },
    success: {
      main: '#30bc82',
      light: '#6cefb2',
      dark: '#008b55',
      contrastText: '#FFF'
    },
    danger: {
      main: '#da5265',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#F0C71B',
      light: '#ffeb71',
      dark: '#c18900',
      contrastText: '#FFF'
    },
    error: {
      main: '#da5265',
      light: '#ff8492',
      dark: '#a31b3b',
      contrastText: '#FFF'
    },
    background: {
      default: '#F0F0F0',
      paper: '#FFF'
    }
  },  
});

const typographyOverride = createTheme(paletteOverride, {
  typography: {
    h1: {
      fontWeight: 'lighter',
      fontSize: 96
    },
    h2: {
      fontWeight: 'normal',
      fontSize: 60
    },
    h3: {
      fontWeight: 'normal',
      fontSize: 48
    },
    h4: {
      fontWeight: 'normal',
      fontSize: 34
    },
    h5: {
      fontWeight: 'normal',
      fontSize: 24
    },
    h6: {
      fontWeight: 'bold',
      fontSize: 20
    },
    subtitle1: {
      fontWeight: '500',
      fontSize: '16px'
    },
    subtitle2: {
      fontWeight: '300',
      fontSize: '40px'
    },
    subtitle3: {
      fontWeight: '300',
      fontSize: '30px'
    },
    subtitle4: {
      fontWeight: 600,
      fontSize: '64px'
    },
    body1: {
      fontWeight: 'normal',
      fontSize: 16
    },
    body2: {
      fontWeight: '500',
      fontSize: 14
    },
    body3: {
      fontWeight: 700,
      fontSize: 14
    },
    button: {
      fontWeight: 'bold',
      fontSize: 14,
      textTransform: 'uppercase'
    },
    caption: {
      fontWeight: 400,
      fontSize: '16px'
    },
    caption2: {
      fontWeight: '500',
      fontSize: '11px'
    },
    caption3: {
      fontWeight: '700',
      fontSize: '12px'
    },
    caption4: {
      fontWeight: '700',
      fontSize: '16px'
    },
    overline: {
      fontWeight: 'normal',
      fontSize: 10,
      textTransform: 'uppercase'
    }
  },
});

const componentsOverride = createTheme(typographyOverride, {
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: paletteOverride.palette.background.default
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: { root: { paddingTop: '5px !important' } },
    },
  }
});

const theme = createTheme(componentsOverride, ptBR);

export default theme;