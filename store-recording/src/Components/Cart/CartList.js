import React from 'react'
import CartItems from './CartItems'
export default function CartList({value}) {
    console.log(value);
    const {cart} = value;
    return (
        <div className="container-fluid">
             {cart.map(item=>{
                 return  <CartItems key={item.id} item={item} value={value}/>;
             })
             }
          
              
           
        </div>
    )
}
