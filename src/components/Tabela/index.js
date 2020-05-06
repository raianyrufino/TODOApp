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
                    quantidade: '0',
                    preco: '10.0' }
        setLista([...lista, novo_item]);
    }
    
    const [numero, setNumero] = useState(0);

    const quantificarLess = (id) => {
        const resposta = lista.map(item => {
            if(item.id === id){
                item.quantidade = numero - 1;
                setNumero(numero-1);
            }
        });
    }

    const quantificarMore = (id) => {
        const resposta = lista.map(item => {
            if(item.id === id){
                item.quantidade = numero + 1;
                setNumero(numero+1);
            }
        });
    }

    return (
        <div class="tabela">
            {lista.map((item)=>(
                <li 
                    key = {item.id} 
                    style = {{textDecoration: item.status ? 'line-through' : '',
                            color: item.status ? 'green' : 'red'}} 
                    onClick = { () => { riscar(item.id) } }> {item.nome} 
                    <button onClick={() => { quantificarLess(item.id) } }>-</button>
                    {item.quantidade}
                    <button onClick={() => { quantificarMore(item.id) }}>+</button>
                </li>  
            ))}
            <input id='teste' onChange={(e)=>{setItem(e.target.value)}} type='text' value={item}/><button onClick={Adicionar}>Adicionar</button>
        </div>
    );
}

export default Tabela;
