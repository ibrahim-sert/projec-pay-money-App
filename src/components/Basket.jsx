import BasketItem from "./BasketItem";

const Basket = ({ basket, total, products, resetBasket }) => {
  return (
    <>
    <div className="basket-container container">
      <h3>Alışveriş Detayları</h3>
      <ul>
        {basket.map((item) => (
          <BasketItem
          key={item.id}
            item={item}
            product={products.find((p) => p.id === item.id)}
          />
        ))}
      </ul>
      <div className="total">Toplam: $ {total}</div>
      <button className="basket-reset-btn" onClick={resetBasket}>Sepeti Boşalt</button>
    </div>
    <style jsx>{`
    .basket-container{
      padding:1rem;
      background:#fff;
      border:1px solid #ddd
    }
    .basket-container h3{
      font-size:1.1rem;
      margin-bottom:1rem
    }
    .basket-container .total{
      border-top:1px solid #ddd;
      paddin-top:.6rem;
      font-size:1rem;
      font-weight:bold;
      text-align:right;
      color:#179b17;
    }
    .basket-reset-btn{
      background:#61dafb;
      height:1.8rem;
      padding: 0 1.2rem;
      font-size:1rem;
      font-weight:500
      cursor:pointer
    }
    `}</style>
    </>
  );
};

export default Basket;
