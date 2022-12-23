import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Auth/Home";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ProductDetail from "./pages/Admin/ProductDetail";
import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Bulletin from "./components/Bulletin";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import Admin from './pages/Admin'
import AdminHome from './pages/Admin/Home';
import Orders from './pages/Admin/Orders';
import Products from './pages/Admin/Products';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container maxW="85%">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/basket" element={<Basket />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} >
                <Route index element={<AdminHome />} />
                <Route path="home" element={<AdminHome />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:product_id" element={<ProductDetail />} />
              </Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
        <Bulletin />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
