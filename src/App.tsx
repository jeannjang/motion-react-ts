import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
