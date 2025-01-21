

import styled from 'styled-components'

export const SearchFormContainer = styled.form`
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