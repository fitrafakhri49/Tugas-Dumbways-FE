import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Home from "./pages/Home";
import About from './pages/About';
import Products from './pages/Products';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';
import { Login } from './pages/Login';
import PrivateRoute from './lib/PrivateRoute';
import ThemeToggle from './components/ThemeToggle';
import Cart from './pages/Cart';
 "./pages/Cart";
import { CartProvider } from "./context/CartProvider";

function Header() {
  const {token,logout}=useAuth();
  return(
    <div className="w-full flex gap-4 p-4 justify-center border-b mb-10">
      <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>
      <Button asChild variant="outline">
          <Link to="/about">About</Link>
        </Button>
        {token && (  <Button asChild variant="outline">
          <Link to="/products">Products</Link>
        </Button>
)}
            {token && (  <Button asChild variant="outline">
          <Link to="/cart">Cart</Link>
        </Button>
)}
        {token? (
          <Button onClick={logout} variant="destructive">Logout</Button>
          ):(
          <Button asChild variant="outline"><Link to="/login">Login</Link></Button>
          )}
          <ThemeToggle/>
      </div>
  )
}

function App() {

  return (
    <CartProvider>
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
       <Route path='/products' element={
        <PrivateRoute>
        <Products></Products>
        </PrivateRoute>
       }></Route>
         <Route path='/cart' element={
        <PrivateRoute>
        <Cart></Cart>
        </PrivateRoute>
       }></Route>
        </Routes>
        </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  )
}

export default App
