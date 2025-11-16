import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function Login() {
    const {login}=useAuth()
    const navigate=useNavigate();
    const [username,setUsername]=useState("")   
    const [password,setPassword]=useState("")   
    const [errorMessage,setErrorMessage]=useState("")   

    const handleLogin=(e:React.FormEvent)=>{
        e.preventDefault();
    
if(username== "admin" && password =="admin"){
    login("token_abc") 
    navigate("/favorites")
}
else{
    setErrorMessage("username atau password salah")
}
    }
    return(
        <div className="flex items-center justify-center min-h-screen p-4 ">
            <form  onSubmit={handleLogin} className="w-full max-sm bg-white dark:bg-zinc-900 p-6 rounded shadow space-y-4">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <div className="">
                    <Label htmlFor="username">Username</Label>
                    <Input
                    id="username" type="text" placeholder="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>

                <div className="">
                    <Label htmlFor="password">Password</Label>
                    <Input
                    id="password" type="password" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)} required/>
                </div>
                {errorMessage &&(
                    <p>{errorMessage}</p>
                )}
                <Button type="submit" className="w-full">Login</Button>
            </form>
        </div>
    )
}