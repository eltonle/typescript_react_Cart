import { useState } from "react"
import useCart from "../hooks/useCart"
import CartLineItem from "./CartLineItem"

function Cart() {

  const [confirm, setConfirm] = useState<Boolean> (false)
  const { dispatch, REDUCER_ACTIONS, cart,totalPrice,totalItems } = useCart()

  const onSubmitOrder = () => {
    dispatch({type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }

  const pageContent = confirm 
      ? <h2>Thank you for your order.</h2>
      : <>
         <h2 className="offscreen">cart</h2>
         <ul className="cart">
           {cart.map(item => {
              return (
                <CartLineItem 
                  key={item.sku}
                  item={item}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              )
           })}
         </ul>
         <div className="cart__totals">
            <p>Total Items: {totalItems}</p>
            <p>Total Items: {totalPrice}</p>
            <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
              place Order</button>
         </div>
       </>


      const content = (
        <main className="main main--cart">
          {pageContent}
        </main>
      )
  return content
}

export default Cart
