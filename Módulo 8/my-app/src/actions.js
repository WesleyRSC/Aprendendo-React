export function getTarefas() {
    return{
        type:"GET_TAREFAS"
    }
}

export function setTarefas(tarefas) {
    return{
        type:"SET_TAREFAS",
    }
}

export function setTarefa(tarefa) {
    return{
        type:"SET_TAREFA",
        payload: tarefa
    }
}

export function deleteTarefa(index) {
    return{
        type:"DELETE_TAREFA",
        payload: index
    }
}

export function setTarefasEditing() {
    return{
        type:"SET_TAREFAS_EDITING"
    }
}

export function setEditing(index) {
    return{
        type:"SET_EDITING",
        payload: index
    }
}