import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function addTask(name){
  alert(name);
}

function App(props){
  console.log(props);

  const taskList = props.tasks.map(task => (
  <Todo 
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id} />));
  console.log(taskList);

  return(
    <div className="todoapp stack-large">
    <h1>TodoMatic</h1>
      <Form addTask={addTask} />
    <div className="filters btn-group stack-exception">
     <FilterButton/>
     <FilterButton/>
     <FilterButton/>
    </div>
    <h2 id="list-heading">
      3 tasks remaining
    </h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {/* <Todo name="Eat" completed={true} id="todo-0" />
      <Todo name="Sleep" completed={false} id="todo-1" />
      <Todo name="Repeat" completed={false} id="todo-2" />
       */}
       {taskList}
    </ul>
  </div>
);
}

export default App;