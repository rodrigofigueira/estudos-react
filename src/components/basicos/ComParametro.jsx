import React from 'react'

export default function ComParametro(props){
    const {titulo, aluno, nota} = props;
    const status = nota >= 7 ? "Aprovado(a)" : "em Recuperação";
    return(
        <div>
            <h2>{titulo}</h2>
            <p>
                Aluno(a) : <strong>{aluno} </strong> 
                está <strong>{status}</strong>
            </p>
        </div>
    );

}