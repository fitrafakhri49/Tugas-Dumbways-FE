// import React from "react";
type ButtonProps={
    text:String;
EventOnClick:()=>void;
}


export function Button({text,EventOnClick}:ButtonProps) {
    return(
    <>
    
    <button onClick={EventOnClick}> {text}</button>
    
    </>)
}