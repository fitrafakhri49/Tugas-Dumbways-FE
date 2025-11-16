import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Home from "./pages/Home";
import About from './pages/About';
// import Products from './pages/Movies';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';
import { Login } from './pages/Login';
import PrivateRoute from './lib/PrivateRoute';
// import {  } from "module";
import ThemeToggle from './components/ThemeToggle';
import Favorites, {  } from "./pages/Favorite";
import Movies from './pages/Movies';

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

        <Button asChild variant="outline">
          <Link to="/movies">Movies</Link>
        </Button>
        {token && (  <Button asChild variant="outline">
          <Link to="/favorites">Favorites</Link>
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
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>

          {/* Private Route */}
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
