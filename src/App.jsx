import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Cabecera from './assets/componentes/Header';
import NavBar from './assets/componentes/navBar';
import Content from './assets/componentes/Content';
function App() {
  return (

    <ChakraProvider>

      <div className="video-background">
        <video className="video" autoPlay muted loop>
          <source src="/src/assets/componentes/archivos/video.mp4" type="video/mp4"></source>
        </video>
      </div>
      <NavBar></NavBar>
      <Cabecera />
      <Content />



    </ChakraProvider>
  );
}

export default App;
