import React from 'react';
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


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About />}></Route>
        
        <Route path='/New' element={<New />}></Route>
        <Route path='/NewsSwimming' element={<NewsSwimming/>} ></Route>
        <Route path='/NewsFitness' element={<NewsFitness/>}></Route>
        <Route path='/NewsBicycle' element={<NewsBicycle/>}></Route>
        <Route path='/NewSalos' element={<NewSalos/>}></Route>
        <Route path='/NewGroupFitnes' element={<NewGroupFitnes/>}></Route>
        <Route path='/NewFood' element={<NewFood/>}></Route>
       

        
      </Routes>

      <Footer></Footer>
      {/* <Routes>
        <Route path='/' element={<Router />} />
      </Routes> */}
    </div>
  );
}

export default App;
