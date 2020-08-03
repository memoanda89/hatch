import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TodoItem from '../TodoItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const TodoList = ( ) => (
  
   <div >
        <Grid container spacing={3} >
        <Grid item xs={12} className="App">
           <h1> Lista de tareas</h1>
           </Grid>
           <Grid item xs={12} className="App">
           <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
  <Button>Todos</Button>
  <Button>Activos</Button>
  <Button>Completos</Button>
 
</ButtonGroup>
           </Grid>
        <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <TodoItem/>
                    <br/>
                    <TodoItem/>
                    <br/>
                    <TodoItem/>
                    </Grid>
                </Grid>
                </Grid>
      
       
        </Grid>
    </div>
)


export default TodoList