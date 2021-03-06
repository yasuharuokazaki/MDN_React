import React,{useState} from "react";





export default function Form(props){
// useStateは、stateの初期値と、初期値を更新するための関数を返す！
// 下のコードは、name=Use hooks ,setName= setState({name:xx})という二つの
// 返り値を[]内に格納している。
    const [name,setName]=useState("");

    // inputの変更をキャッチして、namestateに反映
    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(name===""){
            alert("Task isn't setted!");
        }else{

        props.addTask(name);
        setName("");

        }
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
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
    );
}
