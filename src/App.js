import React from 'react';

import "./styles.css";

import Header from './components/Header/index';
import Tabela from './components/Tabela/index';
import Checkboxes from './components/Check/index';
import Input from './components/Input/index';

function App() {
   return (
    <div className="App">
      <Header/>
      
      Adicione um novo item a lista
      <Input/>

      <Tabela/>
    </div>
  );
}

export default App;