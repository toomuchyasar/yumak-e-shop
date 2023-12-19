import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { PageContainer } from "./containers/PageContainer";
import { Details } from "./pages/Details";
import { Cart } from "./pages/Cart";
import { Search } from "./pages/Search";



function App() {
  return (
    <div className="App">
      <PageContainer>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<Details/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product/:search' element={<Search/>} />
        </Routes>
      </Router>
      </PageContainer>
      
    </div>
  );
}

export default App;
