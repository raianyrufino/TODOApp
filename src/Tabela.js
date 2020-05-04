import React, {Component} from 'react';

const TableHead = () => {
    return (
    <thead>
        <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço</th>
        </tr>
    </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.item}</td>
                <td>{linha.quantidade}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
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
            <table>
                <TableHead />
                <TableBody autores = { autores }/>
            </table>
        );
    }
}

export default Tabela;