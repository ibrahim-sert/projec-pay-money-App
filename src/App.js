import "./App.css"
import Header from "./components/Header";
import Product from "./components/Product";
import { useState,useEffect } from "react";
import products from "./products.json"

const App = () => {
  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])

  useEffect(()=>{

  },[basket])
  return (
    <>
    <Header money={money}/>
    {products.map((product)=>(
      <Product key={product.id} product={product} basket={basket} setBasket={setBasket}/>
    ))}
    </>
  );
};

export default App;
