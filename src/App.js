import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';
import Header from './components/Header';

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
