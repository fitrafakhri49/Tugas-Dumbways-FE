import { useState } from "react";
import { useTodo } from "../hooks/useTodo";
export default function ToDoForm() {
    const [text,setText]=useState("")
    const {createTodo , loading}=useTodo()
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if (!text.trim())return;
        createTodo(text)
        setText('')

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="border m-5" placeholder="Add new Task" disabled={loading}/>
            
            <button type="submit" className="ml-4" disabled={loading}>Add</button>
        </form>
    )
}