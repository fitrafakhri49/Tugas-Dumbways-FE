export async function fetchProduct(product:string):Promise<{product:string;price:number}> {

    return new Promise((resolve)=>{
       setTimeout(()=>{
        resolve({
            product,price: Math.floor((Math.random() * (10000 - 4000) + 4000) / 100) * 100});
       }, 1000) ;
    });
}