import { useState, useEffect } from 'react';
import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';

function App() {
  // pasar las tareas a localStorage

  let initialTask = JSON.parse(localStorage.getItem("tasks")); // json array de objetos. 
  //tasks guarda el id, nombre, categoria.

  if (!initialTask) {
    initialTask = []; // si no hay nada crear vacio.
  }

  const [tasks, setTasks] = useState(initialTask);

  // UseState controlar estados. 
  // renderizar es compilar.
  // [variable, función para cambiar el valor de la variable task ] = useState (el valor inicial de esa varible)
  // depende de quien va a cambiar. 
  // useEffect, es la que hace que se cambie la pagina porque el useState cambió. (es una variable que se comprta como un estado)
  // setTask. cambia el valor de la tarea. "taks" a=3; a=4.. cambiando el valor de la varible.

  useEffect(() => {
    if (initialTask) { // si hay algo por dentro
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTask, tasks]); // primero. lo que va hacer. segundo [valor inicial de la variable, la varible que debe estar declarada como useState]


  const createTask = (task) => {
    //Aquí agregaremos toda la funcionalidad de crear la tarea para q sea adicionada al container
    setTasks([...tasks, task]); //... lo que ya hay, má la nueva tarea. similar. js +=, solo funciona para arrelgos.

  };

  const deleteTask = (id) => {
    // crear un nuevo arreglo con las tareas que sean diferentes al id de la tarea que quiero eliminar.
    const currentTask = tasks.filter((task) => task.idTask !== id); // task.idTask son todos los ids de las tareas
    setTasks(currentTask); // el valor de task es que que se creo ya eliminando el id de la tarea que quiero.
  } // currentTask  tarea actual.

  return (
    <Container>
      <Header />
      <InputTask createTask={createTask} /> {/* createTask nombre del parametro = {valor del parametro} */}
      <TaskContent tasks={tasks} deleteTask={deleteTask} /> {/* envía tareas y eliminar tareas*/}
    </Container>
  );
}

export default App;