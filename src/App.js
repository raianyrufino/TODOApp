import React from 'react';
// import './App.css';
import Tabela from './Tabela';

import "./styles.css";

import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );

}
// function App() {

//     const autores =  [
//       {
//         item: 'arroz',
//         quantidade: '1',
//         preco: '6.50'
//       },
//       {
//         item: 'feijao',
//         quantidade: '3',
//         preco: '10.0'
//       },
//       {
//         item: 'suco de uva',
//         quantidade: '1',
//         preco: '11.0'
//       }
//     ];
  
//   /*
//   removeAutor = index =>{
//     const { autores } = this.state;
  
//     this.setState( 
//       {
//         autores : autores.filter((autor, posAtual) => {
//           return posAtual !== index;
//         }),
//       }
//     );
//   } */

//   return (
//       <div className="App">
//         <Tabela autores = { autores }/>
//       </div>
//     );
// }

export default App;