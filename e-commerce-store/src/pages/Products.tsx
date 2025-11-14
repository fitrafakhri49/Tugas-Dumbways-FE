import { Link, Outlet } from "react-router-dom"

export const product =[
    {id:1,title:"Aqua",detail:"Product Detail 1" ,image:"../src/assets/aqua.jpeg"},
    {id:2,title:"Coca-cola",detail:"Product Detail 2",image:"../src/assets/coca cola.jpeg"},
    {id:3,title:"Fanta",detail:"Product Detail 3",image:"../src/assets/fanta.jpeg"},
    {id:4,title:"Minute Maid",detail:"Product Detail 4",image:"../src/assets/minute maid.jpeg"},
    {id:5,title:"Sprite",detail:"Product Detail 5",image:"../src/assets/sprite.jpeg"},

]
export default function Products(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">

        <h1 className="text-5xl mb-4 font-bold">Products Page</h1>
        <ul className="mb-4">
            {product.map((product)=>(
                <li key={product.id}>
                <Link to={product.id.toString()} className="text-blue-600 underline">{product.title}</Link>
                </li>
            ))}
        </ul>
        <Outlet/>
            
        </div>
    )
}