import React, {useState} from "react";


function NewTaskForm( {onTaskFormSubmit}) {

const [addDetails, setAddDetails] = useState("");
const [addCategory, setAddCategory] = useState("Code");

function logInput(e){
  //console.log(e.target.value)
  setAddDetails(e.target.value)
}

function logCategory(e) {
  //console.log(e.target.value)
  setAddCategory(e.target.value)
}


function createNewTask(e){
  e.preventDefault()
  onTaskFormSubmit({text: addDetails, category: addCategory})
  //console.log("New Task")
  setAddDetails("")
  setAddCategory("Code") 
}


  return (
    <form className="new-task-form" onSubmit={createNewTask}>
      <label>
        Details
        <input type="text" name="text"  onChange={logInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={logCategory} >
          {/* render <option> elements for each category here */}
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
