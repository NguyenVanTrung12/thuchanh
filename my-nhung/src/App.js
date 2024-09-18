import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './BAITAPLON2/header';
import Footer from './BAITAPLON2/footer';
import Home from './BAITAPLON2/home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      {/* <Routes>
        <Route path='/' element={<Router />} />
      </Routes> */}
    </div>
  );
}

export default App;
