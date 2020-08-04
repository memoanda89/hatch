import React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'

const TodoInput = ({ TodoListArray, dispatch, agregarTarea }) => {

    const edit = useSelector(state => state.editItem)
    var tarea_text = useSelector(state => state.Actualiza_tarea)
    const id = useSelector(state => state.Actualiza_id)

    let input
    //#region "fomulario de alta y modificacion de tarea"
    //se valida  si state.Actualiza_id esta en verdadedo para mostrar el valor a actualizar 
    // si esta en falso  muestra las opciones para registrar una nuea tarea

    return (
        <div className="App">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                agregarTarea(input.value, id)
                input.value = ''
            }}>

                {/* muestra la informacion  del la atrea a editar */}
                {edit ?
                    " Descripcion anterior :" + tarea_text
                    : ""}
                <br />
                <label>Descripcion Tarea </label>
                <br />
                <input ref={node => input = node} className="NuevaTarea" />

                <br />
                {/* boton para  guardado valida la informacion para saber si se actualiza o se guarda una nueva tarea */}
                <Button variant="contained" color="primary" type="submit" >
                    {edit ? "modifica tarea" : "agregar tarea"}
                </Button>
            </form>
        </div>
    )
}
//#endregion
//#region "disparadores de funciones"
const mapStateToProps = state => ({
    TodoListArray: state.TodoListArray
})

const mapDispatchToProps = dispatch => ({
    agregarTarea(text, id) {
        // valida si el id==0 para un nuevo registro o de no ser asi se manda actualizar
        if (id === 0 || id === undefined) {
            dispatch({
                type: "AGREGAR_TAREA",
                text
            })
        } else {
            dispatch({
                type: "ACTUALIZA_TAREA",
                text,
                id
            })
        }


    }
})
//#endregion
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)


