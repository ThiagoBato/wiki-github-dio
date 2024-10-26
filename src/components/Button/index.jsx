/* eslint-disable react/prop-types */
import { ButtonContainer } from './styles';
import {} from './styles';

export const Button = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
  )
}