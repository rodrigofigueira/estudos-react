import React from 'react';
import DiretaFilho from './DiretaFilho'

export default props =>{
    return (
        <div>
            <DiretaFilho 
                nome="Gabriel"
                idade={17}
                nerd={false}
            />
            <DiretaFilho 
                nome="Manuela"
                idade={0}
                nerd={false}
            />
            <DiretaFilho 
                nome="Calebe"
                idade={0}
                nerd={true}
            />
        </div>
    )
}