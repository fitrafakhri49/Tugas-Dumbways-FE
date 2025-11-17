import { useTodo } from "../hooks/useTodo";
import type { Todo } from "../types/todo";
import { useState } from "react";


export const TodoItem=({todo}:{todo:Todo})=>{
    const {updateTodo,deleteTodo,toggleComplete,loading}=useTodo();
    const [isEditing,setIsEditing]=useState(false);
    const [text,setText]=useState(todo.text)
    const handleUpdate=()=>{
        updateTodo(todo.id ,text)
        setIsEditing(false)
    }

    return(
        <div className="flex justify-center gap-5 items-center mt-10">
            <input type="checkbox" checked={todo.completed} onChange={()=>toggleComplete(todo.id)} />

            {isEditing?(
                <>
                <input className="border " disabled={loading} value={text} onChange={(e)=>setText(e.target.value)}/>

                <button onClick={handleUpdate} disabled={loading}>Save</button>
                </>
            ) : (
                <>
                <span style={{textDecoration:todo.completed?'line-through' :'none'}}>{todo.text}
                <button className="ml-4" onClick={()=>setIsEditing(true)} disabled={loading}>Edit</button>
                </span>
                </>
            )}
                <button onClick={()=>deleteTodo(todo.id)} disabled={loading} className="ml-4">Delete</button>
        </div>
    )
}