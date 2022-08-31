import { SnackbarProvider as NotistackProvider, useSnackbar as useNotistack } from 'notistack';
import { createContext, useCallback, useContext, useMemo } from 'react';


const SnackContext = createContext({});

/**
 * Hook para utilizar alertas 
 */
export const useSnackbar = () => {
  return useContext(SnackContext);
};

const Wrapped = ({ children }) => {

  const { enqueueSnackbar } = useNotistack();

  const alert = useCallback(({ message, ...props }) => {
    enqueueSnackbar(message, {
      preventDuplicate: false,
      persist: false,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      ...props
    });
  }, [enqueueSnackbar]);

  const contextValue = useMemo(() => ({
    alert,
    setError: (props) => alert({ ...props, variant: 'error' }),
    setSuccess: (props) => alert({ ...props, variant: 'success' }),
    setInfo: (props) => alert({ ...props, variant: 'info' }),
    setWarning: (props) => alert({ ...props, variant: 'warning' }),
  }), [alert]);

  return (
    <SnackContext.Provider value={contextValue}>
      {children}
    </SnackContext.Provider>
  );
};


const SnackbarProvider = ({ children }) => {
  return (
    <NotistackProvider maxSnack={5} preventDuplicate={false}>
      <Wrapped>
        {children}
      </Wrapped>
    </NotistackProvider>
  );
};

export default SnackbarProvider;


