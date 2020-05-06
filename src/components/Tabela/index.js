import React, {useState} from 'react';

import "./styles.css";

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
    const [item, setItem] = useState('');
    const [preco, setPreco] = useState('');
    const [numero, setNumero] = useState(0);

    /* Riscar um item marcado */
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

    /* Adicionar um novo item na lista */
    const Adicionar = () =>{
        const novo_item = {id: lista.length+1,
                    status: false,
                    nome: item,
                    quantidade: '0',
                    preco: '0.0' }
        setLista([...lista, novo_item]);
    }

    /* Adicionar preço a um item na lista */
    const AdicionarPreco = (id) => {
        const atribuirPreco = lista.map(item => {
             if(item.id === id){
                item.preco = preco;
                // setPreco(preco);
             }
             return item;
         });
         setLista(atribuirPreco);
    }
    
    /* Quantificadores do botão de item */
    const quantificarLess = (id) => {
        const decrementar = lista.map(item => {
            if(item.id === id){
                item.quantidade = numero - 1;
                setNumero(numero-1);
            }
        });
    }

    const quantificarMore = (id) => {
        const incrementar = lista.map(item => {
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
                    > {item.nome}
                    
                    <button onClick={ () => { quantificarLess(item.id) } }>-</button>
                    {item.quantidade}
                    <button onClick={ () => { quantificarMore(item.id) }}>+</button>
                    
                    {item.preco}
                    <input onChange={ (e) => { setPreco(e.target.value) } } type='text'/>
                    <button onClick={ () => { AdicionarPreco(item.id) } }>Preço</button>

                    <input type="checkbox" onClick = { () => { riscar(item.id) } }/>
                </li>  
                
            ))}
            <input id='teste' onChange={ (e) => { setItem(e.target.value) }} type='text'/>
            <button onClick={Adicionar}>Adicionar Item</button>
        </div>
    );
}

export default Tabela;
