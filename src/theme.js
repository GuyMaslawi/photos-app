import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(0, 127, 255)',
        },
        link: {
            backgroundColor: 'rgb(0, 127, 255)',
            text: '#fff'
        },
        button: {
            text: '#fff',
            backgroundColor: 'green',
        },
        warning: {
            main: '#ffc107',
        },
        error: {
            main: '#dc3545',
        }
    },
    shape: {
        borderRadius: '.8rem',
    }
});

export default theme;
