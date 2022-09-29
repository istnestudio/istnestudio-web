import styled from "styled-components";
import { main } from '../../colors';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 32px;
  background: ${main};
  border: none;
  font-family: 'Open Sauce Sans';
  font-weight: 800;
  font-size: 18px;
  color: white;
  width: fit-content;
`;