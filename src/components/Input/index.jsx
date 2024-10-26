import { InputContainer} from './styles.js';

// eslint-disable-next-line react/prop-types
export const Input = ({value, onChange}) => {
  return (
    <InputContainer>
      <input type="text" name="" id="" placeholder='username' value={value} onChange={onChange} />
    </InputContainer>
  )
}