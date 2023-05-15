import { Grid, Header, Icon, Button, Segment, Label, GridColumn } from "semantic-ui-react";
export default function Task(props) {

    const { task, deleteTask } = props;

    const { idTask, taskName, categoryTask } = task; // la tarea que llega esta dividida en tres atributos.

    return (

        <Grid.Column width={8} className="task-container">

            <Segment>
                {categoryTask && ( // si hay un categoria

                    <Label color="teal" ribbon="right">
                        {categoryTask}
                    </Label> // todo el label es el mostrar la categoria.
                )}

                <Header as="h3" className="header-task">
                    {taskName}
                </Header>

                <Header as="h5">{idTask}</Header>

                    <Grid center columns={2}>

                        <Grid.Column>
                            <Button color="red" onClick={() => deleteTask(idTask)}> {/* esta funcion esta en App */}
                                <Icon name="remove circle" /> Eliminar
                            </Button>
                        </Grid.Column>

                    </Grid>
                
            </Segment>

        </Grid.Column>
    );
}