import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { InputLogin } from "./components/button/InputLogin/inputLogin";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <InputLogin />
   </ThemeProvider>
  )
}
