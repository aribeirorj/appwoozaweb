import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import Main from './Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
