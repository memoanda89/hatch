import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
const TodoItem = ({ fecha_creacion,estatus,fecha_modificacion,tarea,TodoListArray,id,CompletarTarea,CancelarTarea,ActualizarTarea}) => {

    const classes = useStyles();
 
  return (
  <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
               
                <Chip label= {estatus} variant="outlined"  color="primary" />
               </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                     {tarea} 
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Fecha Creación :{fecha_creacion}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  Ultima Actualización :{fecha_modificacion}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button variant="contained" color="primary"    onClick={() => CompletarTarea(id)} >Completar</Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                
                    <IconButton size="small">
                            <AutorenewIcon color="primary"  onClick={() => ActualizarTarea(tarea,id)} />
                    </IconButton>
                    <IconButton size="small">
                            <DeleteIcon   onClick={() => CancelarTarea(id)} />
                    </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
   
  )
}
const mapStateToProps = state => ({
    TodoListArray: state.TodoListArray
})

  const mapDispatchToProps = dispatch => ({
    CompletarTarea(id) {

      dispatch({
        type: "COMPLETAR_TAREA",
        id
      })
    },
    CancelarTarea(id) {

        dispatch({
          type: "CANCELAR_TAREA",
          id
        })
      },
      ActualizarTarea(text,id) {
        
          dispatch({
            type: "ENVIA_ACTUALIZAR",
            text,
            id
          })
        },

  })
  
 export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)

 
