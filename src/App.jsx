import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Products from "./Components/Home/Products";
import Navbar from "./Components/Navbar/Navbar";
import Steps from "./Components/Home/Steps";
import Pricing from "./Components/Home/Pricing";
const productsData = async () => {
  const res = await fetch("/Products.json");
  return res.json();
};
const data = productsData();

function App() {
  const [isadded, setAdded] = useState([]);
  return (
    <>
      <Navbar isadded={isadded}></Navbar>
      <Banner></Banner>
      <Banner2></Banner2>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Products data={data} isadded={isadded} setAdded={setAdded}></Products>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <ToastContainer />
    </>
  );
}

export default App;
