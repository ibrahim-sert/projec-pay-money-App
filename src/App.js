import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import products from "./products.json";
import Basket from "./components/Basket";

const App = () => {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket =()=>{
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
      {products.map((product) => (
        <Product
        total={total}
        money={money}
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
      </div>
      {total>0 && <Basket resetBasket={resetBasket} total={total} products={products} basket={basket}/>}
      
    </>
  );
};

export default App;
