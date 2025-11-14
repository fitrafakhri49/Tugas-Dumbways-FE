import './App.css'
import { BrowserRouter,Link, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import { Button } from './components/ui/button';
import ProductDetail from './pages/ProductDetail';
function App() {


  return (
   <BrowserRouter>
   <div className="w-full flex gap-4 p-4 justify-center border-b mb-10">
  <Button asChild variant={'outline'}>
    <Link to="/">Home</Link>
  </Button>
  <Button asChild variant={'outline'}>
    <Link to="/cart">Cart</Link>
  </Button>  <Button asChild variant={'outline'}>
    <Link to="/products">Products</Link>
  </Button>
   </div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/products' element={<Products/>}>
      <Route path=':productId' element={<ProductDetail/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
