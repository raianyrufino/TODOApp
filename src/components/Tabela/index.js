import React, {Component} from 'react';

import "./styles.css";

import Checkboxes from '../Check/index';
// import Button from '../Button/index';

const TableHead = () => {
    return (
    <thead>
        <tr id="tableHead"> 
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço</th>
        </tr>
    </thead>
    );
}

const alertChange = (event) => {
    let item = document.getElementById('item');
    if(item.style.backgroundColor == 'tomato'){
        item.style.backgroundColor = 'green';
        item.style.textDecoration = 'line-through';
    } else {
        item.style.removeProperty('text-decoration');
        item.style.backgroundColor = 'tomato';
    }
};


const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {

        return (
            <tr id="item" key={index}>
                <td>{linha.item}</td>
                <td>{linha.quantidade}
                    {/* <Button class="button-quantidade">+</Button>
                    <Button class="button-quantidade">-</Button> */}
                    <button onclick="more()" class="button-quantidade">+</button>
                    <button onclick="less()" class="button-quantidade">-</button>
                </td>
                <td>{linha.preco}</td>
                <td><Checkboxes FuncaoPai={alertChange}/></td>
            </tr>
        )
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {
        const {autores} = this.props;
        return (
            <table class="item">
                <TableHead />
                <TableBody autores = { autores }/>
            </table>
        );
    }
}

export default Tabela;