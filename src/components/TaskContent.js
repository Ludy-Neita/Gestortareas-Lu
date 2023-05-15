import { Header, Icon, Grid } from "semantic-ui-react";
import Task from './Task';

export default function TaskContent(props) {

    const {tasks, deleteTask} = props; // recibe dos valores, que son enviados por app.

    if (tasks.length === 0){
        return null; // similar a lo que se declaro como array vacío, para evitar errores.
    }

    return (

    <Grid className="tasks-content">

        <Header as="h2" icon textAlign="center">
            <Icon name="settings" />
            Administra tus tareas
        </Header>

        <Grid.Row>
            {tasks.map((task, index) => ( 
                // .map es similar a un for. recorra todos los tasks es el arreglo task es el i.
                // index, es como la clave para que no se repita la tarea.
                <Task task={task} key={index} deleteTask={deleteTask}/>
                // enviar al componente de tarea, tres parametros. la tarea, la llave, y la función.
                // el parametro de eliminar tarea, la envia App.js a TaskContent.js y luego a Task.js
                //index es como un id de cada cuadro, pero solo en el for.
            ))}
        </Grid.Row>

    </Grid>
    );
}