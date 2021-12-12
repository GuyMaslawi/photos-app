import {styled, IconButton, Grid} from "@mui/material";

export const Container = styled('div')((props) => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column'
}));


export const Img = styled('img')`
  height: 20rem;
  width: 100%;
  margin-bottom: 1rem;
  border: 0;
`;

export const Content = styled('div')`
  flex: 1;
  font-size: 1.6rem;
  text-align: center;
  padding: 0 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Actions = styled(Grid)`
  margin-bottom: 1rem;
`;

export const IconButtonStyle = styled(IconButton)`
  .MuiSvgIcon-root {
    width: 3rem;
    height: 3rem;
  }
`;
