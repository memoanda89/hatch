import React from 'react'

import Grid from '@material-ui/core/Grid';
import TodoItem from '../TodoItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
const TodoList = ({ TodoListArray, FiltraTodos, FiltraActivos, FiltraCompleto, editItem }) => {


    return (
        <div >
            <Grid container spacing={3} >
                <Grid item xs={12} className="App">
                    <h1> Lista de tareas</h1>
                </Grid>
                //#region "filtros"

                <Grid item xs={12} className="App">
                    {/* Filtros  en lista */}
                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Button onClick={() => FiltraTodos()}>Todos</Button>
                        <Button onClick={() => FiltraActivos()}>Activos</Button>
                        <Button onClick={() => FiltraCompleto()}>Completos</Button>

                    </ButtonGroup>
                </Grid>
                //#endregion
                //#region "lista de tareas"
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {/* lista de tareas  */}
                            <div >
                                {
                                    TodoListArray.map(todo => (
                                        <TodoItem key={todo.id}
                                            {...todo} editItem={editItem} />

                                    ))
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            //#endregion

            </Grid>
        </div>
    )
}
//#region "disparadores de funciones "

const mapStateToProps = state => ({
    TodoListArray: state.TodoListArray
})

const mapDispatchToProps = dispatch => ({
    //funcion para guardar un nuevo registro
    agregarTitular(TodoItem) {
        dispatch({
            type: "AGREGAR_TAREA",
            TodoItem
        })
    },
    // filtro para mostrar todas las tareas
    FiltraTodos() {

        dispatch({
            type: "FILTRA_TAREA_TODOS"

        })
    },
    // filtro para mostrar todas las activas
    FiltraActivos() {
        dispatch({
            type: "FILTRA_TAREA_ACTIVA",

        })
    },
    // filtro para mostrar todas las tareas completas
    FiltraCompleto() {
        dispatch({
            type: "FILTRA_TAREA_COMPLETO",

        })
    },
    //#endregion


})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)