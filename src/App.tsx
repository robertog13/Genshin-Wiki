import React from "react";
import RouteFC from "./Routes";
import "./index.css";
import { Provider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

const App: React.FC = () => {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RouteFC />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
