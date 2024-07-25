import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './pages/routes';

import { ThemeProvider } from './contexts/themeContext';

function App() {

  console.log('Qualquer instabilidade na aplicação de um f5, valeu!!')

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-weight: 300;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
  font-size: 16px;
}

body {
    background-color: #11212D;
}

a {
    text-decoration: none;
    color: #000;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
}

.btn {
    font-size: 30px;
    color: #11212D;
    cursor: pointer;
    transition: 0.3s ;
}

`