import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globalStyle';

import colors from '~/theme/colors';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '~/store';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#1976d2',
      900: '#1976d2',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ChakraProvider>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
