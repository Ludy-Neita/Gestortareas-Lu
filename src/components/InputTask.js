import { Select, Input, Button, Grid, Header, Icon, HeaderContent } from "semantic-ui-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // nombre por defecto as nombre que se le quiero colocar.

const options = [
    { key: "deporte", text: "Deporte", value: "deporte" },
    { key: "casa", text: "Casa", value: "casa" },
    { key: "oficina", text: "Oficina", value: "oficina" },
    { key: "relax", text: "Relax", value: "relax" },
    { key: "social", text: "Social", value: "social" },
    { key: "compras", text: "Compras", value: "compras" },
    { key: "github", text: "Github", value: "github" },
    { key: "otra", text: "Otra", value: "otra" }

];
export default function InputTask(props) { // recibe el parametro de App. que es createTask.

    const [task, setTask] = useState({ // inicializar la tarea. esto es un objeto, que se comporta como un estado.

        idTask: "",
        taskName: "", // este es igual a name="taskName" (html)
        categoryTask: ""

    });



    const { createTask } = props; // asigna nombre al props para que sea igual a lo definido en app.

    const onChangeTask = (e) => { // se ejecuta si cambia el valor inicial. ej. hola y despues agrego s...holas, actualizar el valor cuando se modifica. ejemplo escrir en word una palabra y la ajusto.
        // e es el evento, todo lo que se pueda interactar con la pag, un clink, poner el mouse sobre algo, modificar un input.
        setTask({
            ...task, // lo anterior al nombre de la tarea. que no es nada. es para evitar errores.
            [e.target.name]: e.target.value // guarda el nombre del evento como el valor evento.
        }); //  [e.target.name]:  es igual a taskName pero cuando se ejecuta el evento


    };

    const onChangeCategoryTask = (e, data) => { // e: el evento, y data: son las opciones.

        setTask({
            ...task,
            [data.name]: data.value // data.value, el valor de las oopcione (Casa, deporte, otros)
        });
    };

    const [errorTarea, setErrorTarea] = useState(false);
    const [errorCategoria, setErrorCategoria] = useState(false);

    const onSubmitTask = (e) => {

        //que no recargue la pagina
        e.preventDefault(); // una de las funciones de los eventos que ya estan establecidas.

        //validación de que este diligenciada la tarea y la categoria.

        if (task.taskName.trim() === "") {
            setErrorTarea(true);
            return;
        }

        if (task.categoryTask === "") {
            setErrorCategoria(true);
            return;
        }
    

        //eliminar el mensaje previo:q
        setErrorTarea(false);
        setErrorCategoria(false);

       
        //asignar un ID
        task.idTask = uuidv4();

        //crear la tarea
        createTask(task); // ejecuta la función de app. linea 39. 

        //limpiar los inputs
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: ""
        });

    };

    return (
        <> {/* esto es crear vacia la etiqueta es div, un button, select, input..*/}
            <Grid centered columns={2}>
                <Input
                    size="small"
                    icon="add"
                    placeholder="Escribe tu tarea..."
                    iconPosition="left"
                    name="taskName"
                    value={task.taskName}
                    onChange={onChangeTask}
                />
                <Select
                    compact
                    options={options}
                    className="select-form-task"
                    name="categoryTask"
                    placeholder="Categoría"
                    value={task.categoryTask}
                    onChange={onChangeCategoryTask}
                />
                <Button type="submit" color="violet" onClick={onSubmitTask}>
                    Añadir tarea
                </Button>

            </Grid>

            {errorTarea && ( // si error es verdadero entonces haga esto.

                <Grid centered>
                    <Header as="h4" color="red" className="alert-error-form">
                        <Icon name="close" />
                        <Header.Content>La tarea es obligatoria</Header.Content>
                        <Icon name="close" />
                    </Header>
                </Grid>
            )}

            {errorCategoria && ( // si error es verdadero entonces haga esto.

                <Grid centered>
                    <Header as="h4" color="red" className="alert-error-form">
                        <Icon name="close" />
                        <Header.Content>La categoria es obligatoria</Header.Content>
                        <Icon name="close" />
                    </Header>
                </Grid>
            )}
        </>
    );
}