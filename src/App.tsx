import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/theme";
import Motion from "./components/Motion";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Motion />
    </ThemeProvider>
  );
}

export default App;
