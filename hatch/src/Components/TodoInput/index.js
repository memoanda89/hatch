import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class TodoInput extends Component{

    render(){
        return (
<div className="App">
<form noValidate autoComplete="off">
<label>    nueva tarea</label>
<br/>
      <TextField id="standard-basic" label="Nueva tarea" />
      <br></br>
      <Button variant="contained" color="primary" >
    Nueva tarea
    </Button>
       </form>
</div>

        );
    }
}