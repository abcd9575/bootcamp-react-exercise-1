import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  // 일단 여기서 리엑트 처음 시작하는 곳. 렌더링 뿌려주는곳이잖아. 다음 어디야? 
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light' />
      <App />  {/* 여기가 시작 */} 
    </ChakraProvider>
  </React.StrictMode>
);
