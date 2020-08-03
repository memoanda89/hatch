import { createStore } from "redux"
let id = 1
const initialState = {

    TodoListArray: [],
    TodoList: [],
  
}

const reducerTareas = (state = initialState, action) => {

    if (action.type === "AGREGAR_TAREA") {
        var fecha = new Date();

        let obj = {
            id: id++,
            tarea: action.text,
            fecha_creacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()+" "+ fecha.getHours()+":" +fecha.getMinutes() +":"+ fecha.getMilliseconds(),
            fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()+" "+ fecha.getHours()+":" +fecha.getMinutes() +":"+ fecha.getMilliseconds(),
            estatus: "Activo"
        }
  
        return {
            ...state,
            TodoListArray: state.TodoListArray.concat(obj),
            TodoList:state.TodoListArray.concat(obj),

        }
    }

    if (action.type === "FILTRA_TAREA_ACTIVA") {

        var listRep=state.TodoList;
     return {
            ...state,
            TodoListArray: listRep.filter(j => j.estatus === "Activo"),
        }
    }

    if (action.type === "FILTRA_TAREA_COMPLETO") {
        var listRep=state.TodoList;
        return {
               ...state,
               TodoListArray: listRep.filter(j => j.estatus === "Completo"),
           }
       }
       if (action.type === "FILTRA_TAREA_TODOS") {

      
        var listRep=state.TodoList;
      
        return {
               ...state,
               TodoListArray:listRep.filter(j => j.estatus !== "Cancelado"),
           }
       }

    return state
}

export default createStore(reducerTareas)