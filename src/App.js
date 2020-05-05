import React from 'react';
// import './App.css';
// import Tabela from './Tabela';

import "./styles.css";

import Header from './components/Header/index';
import Tabela from './components/Tabela/index';
import Checkboxes from './components/Check/index';
import Input from './components/Input/index';

function App() {

  const autores =  [
    {
      item: 'arroz',
      quantidade: '1',
      preco: '6.50'
    },
    {
      item: 'feijao',
      quantidade: '3',
      preco: '10.0'
    },
    {
      item: 'suco de uva',
      quantidade: '1',
      preco: '11.0'
    }
  ];

  return (
    <div className="App">
      <Header/>
      
      Adicione um novo item a lista
      <Input/>

      <Tabela autores = { autores }/>
    </div>
  );

}

export default App;