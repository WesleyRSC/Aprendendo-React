import React from'react';
import "./FormGroup.css";

function FormGroup(props) {
    return (
    <div className="formgroup">{props.children}</div>
    );
}

export default FormGroup;