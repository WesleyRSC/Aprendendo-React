import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Itens from './components/Itens';
import Button from './components/Button';

function App() {
  const [tarefa,setTarefa] = React.useState("");
  const [isEditing,setEditing] = React.useState(-1);
  const [tarefas,setTarefas] = React.useState([]);

  const handleSubmit = event =>{
    event.preventDefault();

    if (isEditing >= 0) {
      setTarefas(
        tarefas.map((taref,index)=>{
          if (index === isEditing) {
            return tarefa;
          }
          return taref;
        })
      );
      setEditing(-1);
    }
    else{
      setTarefas([...tarefas,tarefa]);
    }

    setTarefa("");
  }

  const handleChange = event => {setTarefa(event.target.value)}

  const handleEdit = index => {
    setTarefa(tarefas[index]);
    setEditing(index);
  }

  const handleDelete = index => setTarefas(tarefas.filter((_,i)=> i === index));

  return (
      <div className="app">
        <h1>Tarefas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="Text" value={tarefa} onChange={handleChange}/>
          <Button 
            tipo="submit"
            name="Add"
            className="btnAdd"
          />
        </form>

        <ul className="Tarefas">
          {tarefas.map((tarefa,index)=>(
            <Itens
              key={`${tarefa}- ${index}`}
              tarefa={tarefa}
              index={index}
              handleEdit= {handleEdit}
              handleDelete ={handleDelete}
            />
          ))}

        </ul>

      </div>
  );
}

export default App;
