import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {ThemeProvider} from '@mui/material/styles';
import {StylesProvider} from '@mui/styles';
import App from './App';
import {store} from "./store/store";
import theme from "./theme";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </StylesProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
