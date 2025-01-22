import { InputContainer,LogoContainer } from "./style";


export function InputPassword() {
    return (
    <div>
        <InputContainer >
            <input
            type="text"
            placeholder="Password"
        />
        </InputContainer>
        <LogoContainer>
        <img src={logoImg} alt="" />
        </LogoContainer>
    </div>
    )
  }