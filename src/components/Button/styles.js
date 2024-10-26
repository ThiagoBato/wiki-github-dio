import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;
  color: #22272e;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  padding: 10px 20px;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #fafafa;
  }
`;
