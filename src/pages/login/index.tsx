import { ButtonLogin } from "../../components/button/ButtonLogin";
import { InputLogin } from "../../components/button/InputLogin/inputLogin";
import { InputPassword } from "../../components/button/InputLogin/inputPassword";


export function LoginPage() {
  return (
    <div>
      <InputLogin/>
      <InputPassword/>
      <ButtonLogin/>
    </div>

  ) 
}