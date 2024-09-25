import React from "react"
import '../Css/ShoppingCart.css';
import { Link } from "react-router-dom";
function ShoppingCart({ cart }) {

  const total = cart.length > 0
    ? cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
    : 0;
  return (

    <>
      <div class="page-banner-section section " style={{margin:'20px 0px'}}>
        <div className="container">
          <div class="tieude">
            <Link to="/" title="Return to home page" style={{ color: 'red' }}>Home page </Link>  »  Cart
          </div>
          <h2 style={{ margin: '10px 0px', textAlign: 'center' }}>Shopping Cart</h2>
        </div>
      </div>

      <div class="page-section section pt-100 pb-60" style={{margin:'20px 0px'}}>
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-xs-12">
                <div class="cart-table table-responsive mb-40">
                  {cart.length === 0 ? (
                    <h1>Your cart is empty.</h1>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th class="pro-thumbnail">Image</th>
                          <th class="pro-title">Product</th>
                          <th class="pro-price">Price</th>
                          <th class="pro-quantity">Quantity</th>
                          <th class="pro-subtotal">Total</th>
                          <th class="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td class="pro-thumbnail"><Link to=""><img src={item.imageUrl} alt="Image" /></Link></td>
                            <td class="pro-title"><a href="">{item.name}</a></td>
                            <td class="pro-price"><span class="amount">{'$' + item.price + '.00'}</span></td>
                            <td class="pro-quantity"><div class="product-quantity"><input type="number" value={item.quantity} /></div></td>
                            <td class="pro-subtotal">$169.00</td>
                            <td class="pro-remove"><a href="">×</a></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              <div class="col-lg-8 col-md-7 col-12">
                <div class="cart-buttons mb-30">

                  <div class="row">

                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input type="submit" value="Update Cart" />
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <Link to="/product">Continue Shopping</Link>
                    </div>

                  </div>



                </div>

              </div>
              <div class="col-lg-4 col-md-5 col-12">
                <div class="cart-total mb-40">
                  <h3>Cart Totals</h3>
                  <table>
                    <tbody>
                      <tr class="cart-subtotal">

                      </tr>
                      <tr class="order-total">
                        <th>Total</th>
                        <td>
                          <strong><span class="amount">{'$' + total + '.00'}</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="proceed-to-checkout section mt-30">
                    <a href="">Proceed to Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>



    </>
  )
}
export default ShoppingCart;
