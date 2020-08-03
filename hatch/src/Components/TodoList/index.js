import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
                <Grid item xs={12} className="App">
                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Button onClick={() => FiltraTodos()}>Todos</Button>
                        <Button onClick={() => FiltraActivos()}>Activos</Button>
                        <Button onClick={() => FiltraCompleto()}>Completos</Button>

                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
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


            </Grid>
        </div>
    )
}


const mapStateToProps = state => ({
    TodoListArray: state.TodoListArray
})

const mapDispatchToProps = dispatch => ({
    agregarTitular(TodoItem) {
        dispatch({
            type: "AGREGAR_TAREA",
            TodoItem
        })
    },
    FiltraTodos() {
        console.log("distacc");
        dispatch({
            type: "FILTRA_TAREA_TODOS"

        })
    },

    FiltraActivos() {
        dispatch({
            type: "FILTRA_TAREA_ACTIVA",

        })
    },

    FiltraCompleto() {
        dispatch({
            type: "FILTRA_TAREA_COMPLETO",

        })
    },



})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)