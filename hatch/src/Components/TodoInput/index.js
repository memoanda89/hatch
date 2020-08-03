import React, { Component } from 'react' 
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import Input from '@material-ui/core/Input';

    const TodoInput = ({ TodoListArray,dispatch ,agregarTarea}) => {
      const edit = useSelector(state => state.editItem)
      var tarea_text= useSelector(state => state.Actualiza_tarea)
      const id = useSelector(state => state.Actualiza_id)

      let input
     
        return (
          <div className="App">
 <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
      
         agregarTarea(input.value,id)
        input.value = ''
      }}>


 { edit ?  
" Descripcion anterior :"+  tarea_text 
     :""}
     <br/>
     <label>Descripcion Tarea </label> 
     <br/>
     <input ref={node => input = node}  className="NuevaTarea" />
    
       <br/>
        <Button variant="contained" color="primary" type="submit" >
{ edit ? "modifica tarea":"agregar tarea"}
</Button>
      </form>
     </div>
        )
      }
      const mapStateToProps = state => ({
        TodoListArray: state.TodoListArray
    })
    
      const mapDispatchToProps = dispatch => ({
        agregarTarea(text,id) {
          
          if(id==0|| id==undefined){
            dispatch({
              type: "AGREGAR_TAREA",
              text
            })
          }else{
            dispatch({
              type: "ACTUALIZA_TAREA",
              text,
              id
            })
          }
      
         
        }
      })
      
     export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)
   

      