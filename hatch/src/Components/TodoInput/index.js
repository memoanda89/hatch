import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import Input from '@material-ui/core/Input';

const TodoInput = ({ TodoListArray, dispatch, agregarTarea }) => {

    let input

    return (
        <div className="App">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                agregarTarea(input.value)
                input.value = ''
            }}>


              
                <label>Descripcion Tarea </label>
                <br />
                <input ref={node => input = node} className="NuevaTarea" />

                <br />
                <Button variant="contained" color="primary" type="submit" >
                agregar tarea
                </Button>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    TodoListArray: state.TodoListArray
})

const mapDispatchToProps = dispatch => ({
    agregarTarea(text) {
console.log("Entro");
            dispatch({
                type: "AGREGAR_TAREA",
                text
            })
        


    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)


