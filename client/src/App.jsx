import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Auth/Home";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ProductDetail from "./pages/ProductDetail";
import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container maxW="75%">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
