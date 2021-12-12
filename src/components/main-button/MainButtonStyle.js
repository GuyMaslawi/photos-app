import {Button} from "@mui/material";
import { styled } from '@mui/material';
import theme from "../../theme";

export const InputStyle = styled('input')((props) => ({
  cursor: 'pointer',
  backgroundColor: theme.palette.button.backgroundColor,
  color: theme.palette.button.text,
  borderRadius: '.8rem',
  border: 0,
  width: '15rem',
  height: '4rem',
  fontSize: '1.5rem',
  transition: 'all.3s',

  '&:hover': {
    backgroundColor: theme.palette.button.text,
    color: theme.palette.button.backgroundColor,
    border: `.1rem solid ${theme.palette.button.backgroundColor}`
  }
}));

export const ButtonStyle = styled(Button)((props) => ({
  cursor: 'pointer',
  backgroundColor: props.variant !== "text" && theme.palette.button.backgroundColor,
  color: props.variant === "text" ? theme.palette.button.backgroundColor : theme.palette.button.text,
  width: '15rem',
  height: '4rem',
  fontSize: '1.5rem',
  transition: 'all.3s',

  '&:hover': {
    backgroundColor: theme.palette.button.text,
    color: theme.palette.button.backgroundColor,
    border: props.variant !== "text" && `.1rem solid ${theme.palette.button.backgroundColor}`
  }
}));
