import { useParams } from "react-router-dom"
import { product}from "./Products"
export default function ProductDetail(){
    const {productId}=useParams()
    if(!productId){
        return 
    }
   const ProductChoice=product.find((element)=> element.id=== parseInt(productId))
    return(
        <div className="mt-8 border rounded bg-gray-400 p-9">
        <h1 className="text-2xl font-semibold mb-2 ">Product Detail</h1>
        <p className="mt-2 mb-4">Showing Details for Product ID: <span className="font-mono text-black">{productId}</span></p>
        <div className="flex w-40 h-40 mx-auto items-center justify-center border-2 rounded"><img className="w-full h-full object-cover"src={ProductChoice?.image} alt={ProductChoice?.title} /></div>
        <p className="m-5">{ProductChoice?.detail}</p>
            <p></p>
        </div>
    )
}