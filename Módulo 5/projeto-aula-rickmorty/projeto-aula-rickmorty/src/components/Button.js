import React from'react';
import "./Button.css";

function Button(props){
    return(
    <button className="btn btn-secondary" onClick={props.onClick}>{props.name}</button>
    );
}

export default Button;