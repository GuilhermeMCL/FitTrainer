

import styled from 'styled-components'

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;


  input {
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['red-new']};
    padding: 1rem;
    height: 0.65rem;
    width: 0.1  rem;
    
}
`
export const LogoContainer = styled.div` 
width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

`
