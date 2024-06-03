import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Cabecera from './assets/componentes/Header';
import NavBar from './assets/componentes/navBar';
import Content from './assets/componentes/Content';
function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Cabecera />
      <Content/>
    </ChakraProvider>
  );
}

export default App;
