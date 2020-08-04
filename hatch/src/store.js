import { createStore } from "redux"
let id = 1
const initialState = {

    TodoListArray: [],
    TodoList: [],
    Actualiza_tarea: "",
    Actualiza_id: 0,
    editItem: false
}

const reducerTareas = (state = initialState, action) => {
    var fecha = new Date();
    //accion un objeto de tarea a la lista
    if (action.type === "AGREGAR_TAREA") {


        let obj = {
            id: id++,
            tarea: action.text,
            fecha_creacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getMilliseconds(),
            fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getMilliseconds(),
            estatus: "Activo"
        }
        //se agrega a la lista para mostrar y aplicar filtros (TodoListArray) y a la lista original que no serge cambios
        return {
            ...state,
            TodoListArray: state.TodoListArray.concat(obj),
            TodoList: state.TodoListArray.concat(obj),

        }
    }
    //accion para modificar el estatus de una  tarea a completo
    if (action.type === "COMPLETAR_TAREA") {

        //se modifica en las 2 listas
        return {
            ...state,
            TodoListArray: state.TodoListArray.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, estatus: "Completo", fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getMilliseconds(), }
                    : todo),

            TodoList: state.TodoListArray.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, estatus: "Completo", fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getMilliseconds(), }
                    : todo)
        }
    }

    //accion para modificar el estatus de una  tarea a cancelado 
    if (action.type === "CANCELAR_TAREA") {

        //se modifica el estatus a cancelado de la tarea y se regresa una lista  filtrando que no muestre los cancelados 
        state.TodoListArray = state.TodoListArray.map(todo =>
            (todo.id === action.id)
                ? { ...todo, estatus: "Cancelado", fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getMilliseconds(), }
                : todo)
        state.TodoList = state.TodoListArray;
        return {
            ...state,
            TodoListArray: state.TodoListArray.filter(j => j.estatus !== "Cancelado"),

        }

    }
    //accion para aplicar filtro de mostrar todas las tareas activas
    if (action.type === "FILTRA_TAREA_ACTIVA") {

        var listRep = state.TodoList;
        return {
            ...state,
            TodoListArray: listRep.filter(j => j.estatus === "Activo"),
        }
    }

    //accion para aplicar filtro de mostrar todas las tareas Completas
    if (action.type === "FILTRA_TAREA_COMPLETO") {
        var listRep = state.TodoList;
        return {
            ...state,
            TodoListArray: listRep.filter(j => j.estatus === "Completo"),
        }
    }

    //accion para aplicar filtro de mostrar todas las tareas 

    if (action.type === "FILTRA_TAREA_TODOS") {
        var listRep = state.TodoList;
        return {
            ...state,
            TodoListArray: listRep.filter(j => j.estatus !== "Cancelado"),
        }
    }
    //accion para enviar los objectos a modificar al form 
    if (action.type === "ENVIA_ACTUALIZAR") {
        return {
            ...state,
            editItem: true,
            Actualiza_tarea: action.text,
            Actualiza_id: action.id
        }
    }
    //accion para actualizar  objecto  y regresarlo a la lista 
    if (action.type === "ACTUALIZA_TAREA") {


        state.TodoListArray = state.TodoListArray.map(todo =>
            (todo.id === action.id)
                ? { ...todo, tarea: action.text, fecha_modificacion: fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getMilliseconds(), }
                : todo)
        state.TodoList = state.TodoListArray;
        return {
            ...state,
            editItem: false,
            Actualiza_tarea: "",
            Actualiza_id: 0
        }
    }




    return state
}

export default createStore(reducerTareas)