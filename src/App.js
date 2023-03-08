import "./App.css"
import Header from "./components/Header";
import Product from "./components/Product";
import { useState,useEffect } from "react";
import products from "./products.json"

const App = () => {
  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(basket.reduce((acc,item)=>{
      return acc+(item.amount*(products.find(product=>product.id===item.id).price))
    },0))
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
