import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route element={<Shop />} path="/shop" />
        <Route element={<ProductPage/>} path={`/Product/:id`}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
