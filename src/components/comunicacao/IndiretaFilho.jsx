import React from 'react';

export default props =>{

    const cb = props.quandoClicar

    return (
        <div>        
            <div>Filho</div>
            <div>
                <button onClick={_ => cb('João', 53, true)}>
                    Fornecer Informações
                </button>    
            </div>    
        </div>
    )
}