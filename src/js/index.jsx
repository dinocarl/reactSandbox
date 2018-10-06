import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import configureStore from './store/configureStore';
import App from './components/App';
import '../styles/index.scss';

const store = configureStore();

const theme = createMuiTheme({});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById(`app`)
);
