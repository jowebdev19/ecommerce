import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route element={<Shop />} path="/shop" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
