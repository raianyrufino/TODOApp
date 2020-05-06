import React, {useState} from 'react';

import "./styles.css";
import { Input } from '@material-ui/core';

const Tabela = () => {
    const itens = [
        {
          id: 0,
          status: false,
          nome: 'arroz',
          quantidade: '1',
          preco: '6.50'
        },
        {
          id: 1,
          status: false,
          nome: 'feijao',
          quantidade: '3',
          preco: '10.0'
        },
        {
          id: 2,
          status: false,
          nome: 'suco de uva',
          quantidade: '1',
          preco: '11.0'
        }
    ];
    
    const[lista, setLista] = useState(itens);

    const riscar = (id) => {
        const resposta = lista.map(item => {
        if(item.id === id){
            item.status = !item.status;
        } 
        return item;
        });
        
        setLista(resposta);
        console.log(resposta, lista);
    }
    
    const [item, setItem] = useState('12');

    const Adicionar = () =>{
        const novo_item = {id: lista.length+1,
                    status: false,
                    nome: item,
                    quantidade: '3',
                    preco: '10.0' }
        setLista([...lista, novo_item]);
    }
  
    return (
        <div class="tabela">
            {lista.map((item)=>(
                <li 
                    key = {item.id} 
                    style = {{textDecoration: item.status ? 'line-through' : '',
                            color: item.status ? 'green' : 'red'}} 
                    onClick = { () => { riscar(item.id) } }> {item.nome} 
                </li>  
            ))}
            <input id='teste' onChange={(e)=>{setItem(e.target.value)}} type='text' value={item}/><button onClick={Adicionar}>Adicionar</button>
        </div>
    );
}

export default Tabela;


// import Checkboxes from '../Check/index';
// import Button from '../Button/index';

// const TableHead = () => {
//     return (
//     <thead>
//         <tr id="tableHead"> 
//             <th>Item</th>
//             <th>Quantidade</th>
//             <th>Preço</th>
//         </tr>
//     </thead>
//     );
// }

// const alertChange = (event) => {
//     let item = document.getElementById('item');
//     if(item.style.backgroundColor == 'tomato'){
//         item.style.backgroundColor = 'green';
//         item.style.textDecoration = 'line-through';
//     } else {
//         item.style.removeProperty('text-decoration');
//         item.style.backgroundColor = 'tomato';
//     }
// };

// // const handleChangeQuantidadeLess = (event) => {
// //     let item = document.getElementById('item-quantidade');
// //     item.target.value-1;
// // }

// // const handleChangeQuantidadeMore = (event) => {
// //     let item = document.getElementById('item-quantidade');
// //     item.target.value+1;
// // }

// const TableBody = props => {
//     const linhas = props.autores.map((linha, index) => {

//         return (
//             <tr id="item" key={index}>
//                 <td>{linha.item}</td>
//                 <td id="item-quantidade">{linha.quantidade}
//                     {/* <Button FuncaoPai={handleChangeQuantidadeMore} class="button-quantidade">+</Button>
//                     <Button FuncaoPai={handleChangeQuantidadeLess} class="button-quantidade">-</Button> */}
//                     <button onclick="more()" class="button-quantidade">+</button>
//                     <button onclick="less()" class="button-quantidade">-</button>
//                 </td>
//                 <td>{linha.preco}</td>
//                 <td><Checkboxes FuncaoPai={alertChange}/></td>
//             </tr>
//         )
//     });

//     return(
//         <tbody>
//             {linhas}
//         </tbody>
//     );
// }

// class Tabela extends Component {
//     render() {
//         const {autores} = this.props;
//         return (
//             <table class="item">
//                 <TableHead />
//                 <TableBody autores = { autores }/>
//             </table>
//         );
//     }
// }

// export default Tabela;