import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './BAITAPLON2/header';
import Footer from './BAITAPLON2/footer';
import Home from './BAITAPLON2/home';
import About from './BAITAPLON2/about';
import New from './BAITAPLON2/News/HomeNews';
import NewsSwimming from './BAITAPLON2/News/NewsDetails/NewsSwimming';
import NewsFitness from './BAITAPLON2/News/NewsDetails/NewsFitness';
import NewsBicycle from './BAITAPLON2/News/NewsDetails/NewsBicycle';
import NewSalos from './BAITAPLON2/News/NewsDetails/NewSalos';
import NewGroupFitnes from './BAITAPLON2/News/NewsDetails/NewGroupFitnes';
import NewFood from './BAITAPLON2/News/NewsDetails/NewFood';
import Register from './BAITAPLON2/Register/form';
import FAQs from './BAITAPLON2/FAQs/FAQs';
import Product from './BAITAPLON2/product';
import ProductDetail from './BAITAPLON2/ProductDetail/ProductDetail';
import Introduce from './BAITAPLON2/introduce';
import Contact from './BAITAPLON2/contact';
import ShoppingCart from './BAITAPLON2/ShoppingCart';
import Sitemap from './BAITAPLON2/sitemap';




function App() {

  const [cart , setCart]=useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Product' element={<Product addToCart={addToCart}/>}></Route>
        <Route path='/New' element={<New />}></Route>
        <Route path='/NewsSwimming' element={<NewsSwimming/>} ></Route>
        <Route path='/NewsFitness' element={<NewsFitness/>}></Route>
        <Route path='/NewsBicycle' element={<NewsBicycle/>}></Route>
        <Route path='/NewSalos' element={<NewSalos/>}></Route>
        <Route path='/NewGroupFitnes' element={<NewGroupFitnes/>}></Route>
        <Route path='/NewFood' element={<NewFood/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/FAQs' element={<FAQs/>}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetail/>}></Route>
        <Route path='/Introduce' element={<Introduce/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Stiemap' element={<Sitemap/>}></Route>
        <Route path='/shoppingcart' element={<ShoppingCart cart={cart} />}></Route>

        
      </Routes>

      <Footer></Footer>
      {/* <Routes>
        <Route path='/' element={<Router />} />
      </Routes> */}
    </div>
  );
}

export default App;
