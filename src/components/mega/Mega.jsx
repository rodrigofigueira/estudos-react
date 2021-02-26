import './Mega.css'
import React, { useState } from 'react';
import gerarNumeros from './gerarNumeros';

export default props => {

    const numerosIniciais = gerarNumeros(props.qtd || 6)
    const [numeros, setNumeros] = useState(numerosIniciais);
    const [qtd, setQtd] = useState(props.qtd || 6);

    return (
        <div className="Mega">
            <h1>Mega</h1>
            <h3>{numeros.join(',')}</h3>
            <div>
                <label htmlFor="">Qtd. de Números:</label>
                <input 
                    min="6"
                    max="20"
                    type="number" 
                    value={qtd}
                    onChange={(e) => {
                        setQtd(+e.target.value);
                        setNumeros(gerarNumeros(qtd));
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtd))}>Gerar Números</button>
        </div>
    )
}