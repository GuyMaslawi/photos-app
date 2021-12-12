import {styled} from "@mui/material";

export const Wrapper = styled('div')`
  background-color: #fff;
  border-radius: .8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60rem;
  max-width: 90vw;
`;

export const Content = styled('div')`
  width: 36rem;
  margin: 0 auto 3rem;
`;

export const Text = styled('p')`
  font-size: 1.6rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
