import React from "react";
import Task from "./Task"

function TaskList({task, onDeleteTask}) {

  const taskList = task.map((taskItem) => (
      <Task
      key={taskItem.text}
      text={taskItem.text}
      category={taskItem.category}
      onDeleteTask={onDeleteTask}
    />
  ));
   
    return (
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        {taskList}
      </div>
    );

  }


export default TaskList;
