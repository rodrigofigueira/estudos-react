import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let {min, max} = props;
    let random = parseInt(Math.random() * (max - min)) + min

    return (
        <>
            <p>Número aleatório gerado entre {min} e {max}</p>
            <p>Valor gerado : {random}</p>
        </>
    )

}
