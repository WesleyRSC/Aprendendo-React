import React from 'react';

function Button({className, type, name, handleClick}) {
    return(
    <button className={className} type={type} onClick={handleClick}>
        {name}
    </button>
    );
}

export default Button;