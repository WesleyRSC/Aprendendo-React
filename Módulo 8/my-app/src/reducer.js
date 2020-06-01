
const INITIAL_STATE  = {
    tarefa: "",
    tarefas:[],
    isEditing: -1
};

function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_TAREFAS":
            return {
                ...state,
                tarefas: ['tarefa 1','tarefa 2']
            }
        case "SET_TAREFA":
            return{
                ...state,
                tarefa: action.payload
            }
        case "SET_TAREFAS":
            return{
                ...state,
                tarefas: [...state.tarefas,state.tarefa]
            }
        case "DELETE_TAREFA":
            return{
                ...state,
                tarefas: state.tarefas.filter((_,i)=> i !== action.payload)
            }
        case "SET_EDITING":
            return{
                ...state,
                isEditing: action.payload
            }
        case "SET_TAREFAS_EDITING":
            return{
                ...state,
                tarefas: state.tarefas.map((taref,index)=>{
                    if (index === state.isEditing) {
                      return state.tarefa;
                    }
                    return taref;
                })
            }

        default:
            return state;
    }
}

export default reducer;