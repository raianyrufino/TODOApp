import React, {useState} from 'react';

import "./styles.css";

const Tabela = () => {
    const itens = [
        {
          id: 0,
          status: false,
          nome: 'carne',
          quantidade: 3,
          preco: '6.50'
        },
        {
          id: 1,
          status: false,
          nome: 'couve',
          quantidade: 2,
          preco: '10.0'
        },
        {
          id: 2,
          status: false,
          nome: 'sucos',
          quantidade: 0,
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
                    quantidade: 0,
                    preco: '0.0' }
        setLista([...lista, novo_item]);
    }

    /* Adicionar preço a um item na lista */
    const AdicionarPreco = (id) => {
        const atribuirPreco = lista.map(item => {
             if(item.id === id){
                item.preco = preco;
             }
             return item;
         });
         setLista(atribuirPreco);
    }
    
    /* Quantificadores do botão de item */
    const quantificarLess = (id) => {
        
        const decrementar = lista.map(item => {
            if(item.id === id && item.quantidade > 0){
                item.quantidade = item.quantidade - 1;
                // item.preco = item.preco * item.quantidade;
            }
            return item;
        });
        setLista(decrementar);
    }

    const quantificarMore = (id) => {
        const incrementar = lista.map(item => {
            if(item.id === id){
                item.quantidade = item.quantidade + 1;
                // item.preco = item.preco * item.quantidade;
            }
            return item;
        });
        setLista(incrementar);
    }

    return (
        <div class="tabela">
            
            <input class="adicionarItem" id='teste' onChange={ (e) => { setItem(e.target.value) }} type='text'/>
            <button onClick={Adicionar}>+ Item</button>

            <div class="lista">
                {lista.map((item)=>(
                    <tr key = {item.id} 
                        style = {{textDecoration: item.status ? 'line-through' : '',
                                color: item.status ? 'green' : 'red'}}> 
                         
                        <td>
                            {item.nome}
                        </td>
                        <td> 
                            <button class = "quantificador" onClick={ () => { quantificarLess(item.id) } }>-</button>
                            {item.quantidade}
                            <button class = "quantificador" onClick={ () => { quantificarMore(item.id) }}>+</button>
                        </td>
                        <td>
                            {item.preco}
                        </td>
                        <td>
                            <input class="input" onChange={ (e) => { setPreco(e.target.value) } } type='text'/>
                            <button onClick={ () => { AdicionarPreco(item.id) } }>$$</button>
                        </td>
                        <td>
                            <input class="checkbox" type="checkbox" onClick = { () => { riscar(item.id) } }/>
                        </td>

                    </tr>  
                ))}
            </div>
        </div>
    );
}

export default Tabela;
