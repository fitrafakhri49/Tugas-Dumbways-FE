export async function fetchProduct(product:string):Promise<{product:string;price:number}|null> {

    return new Promise((resolve)=>{
       setTimeout(()=>{

        const products = ["coca-cola", "fanta","aqua"]
        if(!products.includes(product)){
            resolve(null)
        }
        resolve({
            product,price: Math.floor((Math.random() * (10000 - 4000) + 4000) / 100) * 100});
       }, 5000) ;
    });
}