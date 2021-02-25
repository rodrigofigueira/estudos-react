import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const trs = produtos.map((produto, i) => {
        return <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''} >
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
    });

    return (
        <div>
            <table className="TabelaProdutos">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}