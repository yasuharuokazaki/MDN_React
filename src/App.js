import React from "react";

function FancyBorder(props){
  return(
    <div className={props.color}>
      {props.children}
    </div>
  )
}

function Dialog(props){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p>
        {props.message}
      </p>
    </FancyBorder>
  );
}

export function WelcomeDialog(){
  return(
    <Dialog
      title="Welcome"
      message="Thank you for visiting"
    />
  )
}

