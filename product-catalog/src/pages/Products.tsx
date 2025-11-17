import { useState,useEffect } from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { CartButton } from "../components/buttonCustom";
import { api } from "@/services/api";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

type ProductType ={
    id:number;
    title:string;
    description:string;
    image:string
    quantity:number
}


export default function Posts(){

    const [products,setProducts]=useState<ProductType[]>([]);
    const [loading,setLoading]=useState(true)
    const [selectedProduct,setSelectedProduct]=useState<ProductType | null>(null)

    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const res = await api.get("/products")
                setProducts(res.data)
            } catch (error) {
                console.error("Gagal Fetch Data Produk")
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    return(
        <div className="p-4">

        <h1 className="text-5xl mb-4 font-bold">Products</h1>

        {loading ? (
            <p className="text-center">Loading.....</p>
        ) :(
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 ">
        {products.map((product)=>(
            <Dialog key={product.id}>
                <DialogTrigger asChild>
                <Card onClick={()=>setSelectedProduct(product)} className="cursor-pointer hover:shadow-md transition">
                <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription className="truncate">{product.description}
                    <img src={product.image} alt="" />
                    </CardDescription>
                    </CardHeader>    
                    </Card>                
                    </DialogTrigger>
               <DialogContent>
  <DialogHeader>
    <DialogTitle>{selectedProduct?.title}</DialogTitle>
    <DialogDescription>{selectedProduct?.description}</DialogDescription>

    {selectedProduct && <CartButton product={selectedProduct} />}
  </DialogHeader>
</DialogContent>
            </Dialog>
            ))}
            </ul> 
        )}
            
        </div>
    )
}


