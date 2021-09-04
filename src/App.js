import React ,{useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {nanoid} from "nanoid";


function App(props){
  console.log(props);

  // tasksで受け取った値を初期値に設定＆tasksを更新する関数を設定
  const [tasks,setTasks]=useState(props.tasks);
  
  // 新しいtaskをtasksに追加
  function addTask(name){
    const newTask = {id:"todo-"+nanoid(),name:name,completed:false};
    setTasks([...tasks,newTask])
  }

  // 受け取ったDATAをtaskListへ格納
  const taskList = tasks.map(task => (
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