//custom hooks => debounce
import { useEffect,useState } from "react";
import { fetchProduct } from "../api/product";
//custom hooks => debounce
function useDebounce<T>(value:T, delay:number){
    const [debounceValue,setDebounceValue]=useState(value)

    useEffect(()=>{
        const handler  = setTimeout(() => 
            setDebounceValue(value),delay);
            return ()=>clearTimeout(handler)
    }, [value,delay])
    return debounceValue
} 

//lifecycle component mounting,updating,unmounting

export function ProductApp() {
    const [productInput,setProductInput]=useState("")
    const [productData,setProductData]=useState<{product:string;price:number} | null>(null)
    const [loading,setLoading]=useState(false);
    const debounceProduct=useDebounce(productInput,1000)

    console.log(debounceProduct)

    useEffect(()=>{
        if(debounceProduct){
            setLoading(true);
            fetchProduct(debounceProduct).then((data)=>setProductData(data)).finally(()=>setLoading(false));
        }
    },[debounceProduct]);


    const  handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
        setProductInput(e.target.value)
    }
    return (
        <>
    <h1>Product App</h1>
    <input type="text" placeholder="Enter Product" value={productInput} onChange={handleOnChange} />
        {loading &&  <p>Loading...</p>}

        {productData&&!loading && (
            <>
            <h2>{productData.product}</h2>
            <h3> Rp {productData.price}</h3>
            </>
        )}

</>
    )
}

//ngetik =>debounce/hold=>5 detik => teruskan value inputan => useEffect =>fetching data