import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./layout/Navbar";
import { Routes, Route } from 'react-router-dom'
import Product from "./components/Product/Product";
import Footer from "./layout/Footer";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Admin from "./components/admin/Admin";
import { Toaster } from "react-hot-toast";

function App  () {

  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
