import React,{useState} from "react";





export default function Form(props){
// useStateは、stateの初期値と、初期値を更新するための関数を返す！
// 下のコードは、name=Use hooks ,setName= setState({name:xx})という二つの
// 返り値を[]内に格納している。
    const [name,setName]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("value is :"+e.target.value);
        props.addTask("Say Hello!");
    }

    return(
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
            </label>
        </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
    );
}
