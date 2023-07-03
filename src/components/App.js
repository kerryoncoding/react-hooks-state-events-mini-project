import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [task, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");


  const visibleTasks = task.filter(
    (task)=> category==="All" || task.category === category);

  function handleAddTask(newTask){
    console.log("newtask:", newTask)
    setTasks([...task, newTask])
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(task.filter((task) => task.text !== deletedTaskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory}/>
      <NewTaskForm onTaskFormSubmit={handleAddTask}/>
      <TaskList task={visibleTasks} onDeleteTask={handleDeleteTask} />
      
    </div>
  );
}

export default App;
