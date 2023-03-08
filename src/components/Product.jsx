import {moneyFormat} from "../helpers"

const Product = ({product,basket,setBasket,total,money}) => {

  const basketItem =basket.find(item=>item.id===product.id)
  const addBasket=()=>{
    const checkBasket= basket.find(item=>item.id===product.id)
    if(checkBasket){
      checkBasket.amount+=1
      setBasket([...basket.filter(item=>item.id!==product.id),checkBasket])
    }else{
      setBasket([...basket,{
        id:product.id,
        amount:1
      }])      
    }
  }

  const removeBasket =()=>{
    const currentBasket= basket.find(item=>item.id===product.id)
    const basketWithoutCurrent= basket.filter(item=>item.id!==product.id)
    currentBasket.amount-=1
    if(currentBasket.amount===0){
      setBasket([...basketWithoutCurrent])
    }else{
      setBasket([...basketWithoutCurrent,currentBasket])
    }   
    
  }
  return (
    
    <div className='product' >
        <img src={product.image} alt={product.title} />
        <h6  >{product.title}</h6>
        <div className="price">$ {moneyFormat(product.price)}</div>
        <div className="actions">
          <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
          <span className='amount'>{basketItem && (basketItem.amount || 0)}</span>
          <button className="buy-btn" disabled={total+product.price > money} onClick={addBasket}>Satın Al</button>
        </div>
        <style jsx>{`
        .product{
          padding:13px;
          background:fff;
          border:2px solid #ddd;
          margin-bottom:20px;
          width:24%;
          flex:1
        }
        .product img{
          width:200px;
          height:250px
        }
        .product h6{
          font-size:1rem;
          margin-bottom:.5rem;
        }
        .product .price{
          font-size:1rem;
          color:tomato;
        }
        .product .actions{
          display:flex;
          align-items:center;
          margin-top:1rem
        }
        .actions button{
          height:40px;
          padding:0 15px;
          flex:1
          cursor:pointer
        }
        .actions button[disabled]{
          opacity:0.3
          cursor:not-allowed
        }

        .actions .amount{
          width:2rem;
          text-align:center;
          border:1px solid #ddd;
          height:2rem;
          display:flex;
          align-items:center;
          justify-content:center
        }
        .actions .buy-btn{
          background:magenta;
          font-size:.8rem;
          font-weight:500;
          border-radius:0 .6rem .6rem 0;
          font-size:1rem;
          font-weight:bold;
          color:#555
          
        }
        .actions .sell-btn{
          background:#ccc;
          font-size:.8rem;
          color:#333;
          font-weight:500;
          border-radius: .6rem 0 0 .6rem ;
        }

        `}</style>
        
    </div>
    
  )
}

export default Product