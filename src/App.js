import React from 'react';

import "./styles.css";

import Header from './components/Header/index';
import Tabela from './components/Tabela/index';
import Rodape from './components/Rodape';

function App() {
   return (
    <div className="App">
      <Header/>
      <Tabela/>
      <Rodape/>
    </div>
  );
}

export default App;