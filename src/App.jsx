import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Products from "./Components/Home/Products";
import Navbar from "./Components/Navbar/Navbar";
const productsData = async () => {
  const res = await fetch("/Products.json");
  return res.json();
};

const data = productsData();
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Banner2></Banner2>
      <Suspense fallback={<h2>loading...</h2>}>
        <Products data={data}></Products>
      </Suspense>
    </>
  );
}

export default App;
