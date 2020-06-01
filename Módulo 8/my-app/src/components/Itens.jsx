import React from "react";
import Button from './Button';


export default function Itens({tarefa, index, handleEdit, handleDelete}){
    return(
        <div className="Itens">
            <li>{tarefa}</li>
            <div className="buttons">
                <Button
                    className="Edit"
                    name="Edit"
                    handleClick={()=>handleEdit(index)}
                    tipo=""
                />
                <Button
                    className="Delete"
                    name="Delete"
                    handleClick={()=>handleDelete(index)}
                    tipo=""
                />
            </div>
        </div>
        
    );
}