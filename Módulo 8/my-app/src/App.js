import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {
  getTarefas,
  setTarefas,
  setTarefa,
  deleteTarefa,
  setEditing,
  setTarefasEditing
} from './actions'

import Itens from './components/Itens';
import Button from './components/Button';

function App() {
  /*const [tarefa,setTarefa] = React.useState("");
    const [isEditing,setEditing] = React.useState(-1);
    const [tarefas,setTarefas] = React.useState([]);

    Utilizando o useSelector Pode eliminar a necessidade desses 
    Hooks acima, pois ele já está  pegando os valores do state.
  */

  //Conexão da App com a Store
  const {tarefa, tarefas, isEditing} = useSelector(state => state);


  //O Dispatch é o responsável por fazer com que as actions
  //  cheguem no reducer 
  const dispatch = useDispatch();

  //Tem a função do ComponentDidMount
  React.useEffect(()=>{
    dispatch(getTarefas());
  },[dispatch])

  const handleSubmit = event =>{
    event.preventDefault();

    if (isEditing >= 0) {
      dispatch(setTarefasEditing())
      dispatch(setEditing(-1));
    }
    else{
      dispatch(setTarefas());
    }

    dispatch(setTarefa(""));
  }

  const handleChange = event => dispatch(setTarefa(event.target.value))

  const handleEdit = index => {
    dispatch(setTarefa(tarefas[index]));
    dispatch(setEditing(index));
  }

  const handleDelete = index => dispatch(deleteTarefa(index));

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
