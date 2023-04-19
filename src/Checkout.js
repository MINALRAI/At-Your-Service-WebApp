import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

import './Checkout.css';
import Subtotal from './Subtotal';


function Checkout() {
  const [{basket, user}] = useStateValue(); 

  return (
    <div className='checkout'>
      <div className='checkout__left'>
      {basket?.length === 0 ?(
        <div>
            <h3>Hello, {user?.email}</h3>
            <h2>Your shopping basket is empty</h2>
            <p>
                You have no items in your basket. To buy one or
                add to basket click on the "Add to Basket" next to the item 
            </p>
        </div>
      ):(
        <div>
          <h3>Hello, {user?.email}</h3>
            <h2 className='checkout_title'>Your Shopping basket </h2>
            {basket?.map((item) => (
               <CheckoutProduct 
                 id= {item.id}
                 title= {item.title}
                 image = {item.image}
                 price= {item.price}
                 rating = {item.rating}
               />
            ))}
        </div>
      )} 
      </div>
      {basket.length > 0 &&(
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
