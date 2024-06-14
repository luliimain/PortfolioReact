import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Cabecera from './assets/componentes/Header';
import NavBar from './assets/componentes/navBar';
import Content from './assets/componentes/Content';
import Footer from './assets/componentes/Footer';
import Arriba from './assets/componentes/Arriba';

function App() {
  return (

    <ChakraProvider>

      <div id='fondo' className='fondo'>
        <NavBar></NavBar>
        <Arriba></Arriba>
        <Cabecera />
        <Content />
        <Footer />
      </div>

    </ChakraProvider>
  );
}

export default App;
