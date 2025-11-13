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
    const [noProduct,setNoProduct]=useState(false);
    const debounceProduct=useDebounce(productInput,1000)

    // console.log(debounceProduct)

    useEffect(()=>{
        if(debounceProduct){
            setLoading(true);setNoProduct(false);
            fetchProduct(debounceProduct)
            .then((data) => {
                if (!data) {
                  setNoProduct(true);
                } else {
                  setProductData(data);
                }
              })
              .finally(() => setLoading(false));
          } else {
            setNoProduct(false);
          }
        }, [debounceProduct]);


    const  handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
        setProductInput(e.target.value)
    }
    return (
        <>
    <h1>Product App</h1>
    <input type="text" placeholder="Enter Product" value={productInput} onChange={handleOnChange} />
        {loading &&  <p>Loading...</p>}
        
      {!loading && noProduct && <p>Produk tidak ditemukan</p>}

        {productData&&!loading&&!noProduct&& (
            <>
            <h2>{productData.product}</h2>
            <h3> Rp {productData.price}</h3>
            </>
        )}

</>
    )
}

//ngetik =>debounce/hold=>5 detik => teruskan value inputan => useEffect =>fetching data