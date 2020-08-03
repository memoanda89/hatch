import { createStore } from "redux"
let id = 1
const initialState = {

    TodoListArray: [],
    TodoList: [],
    Actualiza_tarea:"",
    Actualiza_id:0,
    editItem:false
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
      console.log("guarda");
        return {
            ...state,
            TodoListArray: state.TodoListArray.concat(obj),
            TodoList:state.TodoListArray.concat(obj),

        }
    }

    if (action.type === "COMPLETAR_TAREA") {
        var fecha = new Date();
        
        return {
            ...state,
            TodoListArray: state.TodoListArray.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, estatus: "Completo", fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()+" "+ fecha.getHours()+":" +fecha.getMinutes() +":"+ fecha.getMilliseconds(),}
                    : todo),
                    
            TodoList:state.TodoListArray.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, estatus: "Completo", fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()+" "+ fecha.getHours()+":" +fecha.getMinutes() +":"+ fecha.getMilliseconds(), }
                    : todo)
        }
    }
    if (action.type === "CANCELAR_TAREA") {
        var fecha = new Date();
        
        state.TodoListArray=   state.TodoListArray.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, estatus: "Cancelado", fecha_modificacion:fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()+" "+ fecha.getHours()+":" +fecha.getMinutes() +":"+ fecha.getMilliseconds(), }
                    : todo)
                   state.TodoList=state.TodoListArray;
     return {
            ...state,
            TodoListArray: state.TodoListArray.filter(j => j.estatus != "Cancelado"),
           
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
        console.log("todos");
        console.log(listRep);
        return {
               ...state,
               TodoListArray:listRep.filter(j => j.estatus !== "Cancelado"),
           }
       }
       if (action.type === "ENVIA_ACTUALIZAR") {

      
        
    
        
        return {
               ...state,
               editItem:true,
            Actualiza_tarea:action.text,
               Actualiza_id:action.id
           }
       }

       if (action.type === "ACTUALIZA_TAREA") {
        var fecha = new Date();
    
        state.TodoListArray=   state.TodoListArray.map(todo =>
            (todo.id === action.id)
                ? { ...todo, tarea: action.text, fecha_modificacion:fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()+" "+ fecha.getHours()+":" +fecha.getMinutes() +":"+ fecha.getMilliseconds(), }
                : todo)
               state.TodoList=state.TodoListArray;
    
        
        return {
               ...state,
               editItem:false,
            Actualiza_tarea:"",
               Actualiza_id:0
           }
       }




    return state
}

export default createStore(reducerTareas)