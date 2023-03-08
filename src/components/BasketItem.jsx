

const BasketItem = ({item,product}) => {
  return (
    <>
    <li className="basket-item">
        {product.title} <span>x {item.amount}</span>
    </li>
      <style jsx >{`
      .basket-item{
      padding-bottom:.5rem;
      font-size:1rem;
      }
      .basket-item span{
        color:#999
      }
        

    `}</style>
    </>
  )
}

export default BasketItem