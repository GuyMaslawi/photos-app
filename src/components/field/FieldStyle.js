import {TextField} from "@mui/material";
import {styled} from '@mui/material/styles';

export const TextFieldStyle = styled(TextField)(({theme}) => ({
    label: {
        fontSize: '1.6rem',
    },
    '& .MuiOutlinedInput-root': {
        input: {
            height: '3rem',
            fontSize: '1.5rem',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}));
