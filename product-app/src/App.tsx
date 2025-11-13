import { useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { ProductApp } from "./components/ProductApp";

function App() {
  const [Addproduct1,setAdd1]=useState(false);
  const [Addproduct2,setAdd2]=useState(false);
  const [Addproduct3,setAdd3]=useState(false);
  const totalItems = [Addproduct1, Addproduct2, Addproduct3].filter(Boolean).length;
 
  return (
    <>
      <Cart Items={totalItems} />

      <div style={{ display: "flex"}}>

       {Addproduct1 ? (<ProductCard name="Aqua" image={"../src/assets/aqua.jpeg"}
        price={5000} EventOnClick={()=> setAdd1(false) } Isadded={Addproduct1}  />) :
       (<ProductCard name="Aqua" image="../src/assets/aqua.jpeg"
        price={5000} EventOnClick={()=> setAdd1(true) } Isadded={Addproduct1}  />)}

       {Addproduct2 ? (<ProductCard name="Coca Cola" image="../src/assets/coca cola.jpeg"
        price={6000} EventOnClick={()=> setAdd2(false) } Isadded={Addproduct2}  />) :
       (<ProductCard name="Coca Cola" image="../src/assets/coca cola.jpeg"
        price={6000} EventOnClick={()=> setAdd2(true) } Isadded={Addproduct2}  />)}

       {Addproduct3 ? (<ProductCard name="Fanta" image="../src/assets/fanta.jpeg"
        price={7000} EventOnClick={()=> setAdd3(false) } Isadded={Addproduct3}  />) :
       (<ProductCard name="Fanta" image="../src/assets/fanta.jpeg"
        price={7000} EventOnClick={()=> setAdd3(true) } Isadded={Addproduct3}  />)}

      </div>

      <ProductApp/>
    </>
  );
}

export default App;
