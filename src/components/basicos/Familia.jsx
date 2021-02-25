import React, { cloneElement } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props);
                })
            }
            {
                // outra forma de passar os props do pai para os filhos
                // props.children.map((child, i) => {
                //     return cloneElement(child, { ...props, key: i});
                // })
            }
        </div>
    );
}