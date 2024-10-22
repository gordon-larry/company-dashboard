import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "constant";
import { CareerPage, HomePage } from "pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "theme";
function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route path={PATH.CAREER} element={<CareerPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
