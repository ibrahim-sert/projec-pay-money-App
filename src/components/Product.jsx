import React from 'react'

const Product = ({product,basket,setBasket}) => {

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
    <>
    <div style={{padding:"10px",background:"fff",border:"2px solid #ddd",marginBottom:"20px" }} >
        <h6  >{product.title}</h6>
        <div className="price">$ {product.price}</div>
        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
          <span className='amount'>{basketItem && (basketItem.amount || 0)}</span>
          <button onClick={addBasket}>Satın Al</button>
        </div>
        
    </div>
    </>
  )
}

export default Product