import React ,{useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {nanoid} from "nanoid";


  function App(props){
  

  // tasksで受け取った値を初期値に設定＆tasksを更新する関数を設定
  const [tasks,setTasks]=useState(props.tasks);
  
  // 新しいtaskをtasksに追加
  function addTask(name){
    const newTask = {id:"todo-"+nanoid(),name:name,completed:false};
    setTasks([...tasks,newTask])
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task=>{
      if(id === task.id){
        return{...task, completed: !task.completed}
      }
      return task;
    }) ;
    setTasks(updatedTasks);
  }
  
// delete機能
  function deleteTask(id){
    const remainingTasks = tasks.filter(task=>id !== task.id);
    setTasks(remainingTasks);
  }

// edit機能
  function editTask(id,newName){
    const editedTaskList = tasks.map(
      task=>{if(id === task.id){
        return{...task,name:newName}
      }
      return task;
    });
      setTasks(editedTaskList)
  }

  // 受け取ったDATAをtaskListへ格納
  const taskList = tasks.map(task => (
  <Todo 
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    // callback function
    toggleTaskCompleted = {toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask} 
    />));
  
    const tasksNoun = taskList.length !== 1 ? 'tasks':'task';
    const headingText = `${taskList.length}${tasksNoun} remaining`; 

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
      {headingText}
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