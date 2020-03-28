import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { COLORS } from './config';
import routes from './routes';
import { ensureReady } from './utils';
import App from './App';
import { store } from './store';

const MUITheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
});

const generateAppComponent = () => {
  return (
    <MuiThemeProvider theme={MUITheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  );
};

if (typeof window !== 'undefined') {
  ensureReady(routes).then(() => {
    ReactDOM.hydrate(
      <BrowserRouter>{generateAppComponent()}</BrowserRouter>,
      document.getElementById('root')
    );
  });
}

export const renderOnServer = (location: string) => {
  return ensureReady(routes, location).then(() => (
    <StaticRouter location={location} context={{}}>
      {generateAppComponent()}
    </StaticRouter>
  ));
};