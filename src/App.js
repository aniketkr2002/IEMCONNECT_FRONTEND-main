import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/register/SignUp';
import Home from './pages/home/Home';
import Blog from './components/blog/Blog';
import About from './components/about/about';
import Guidance from './components/guidance/Guidance';
import ContactUs from './components/contactUs/contactUs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import AddProduct from './pages/addProduct/AddProduct';
import MyProduct from './pages/myproduct/MyProducts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/senior" element={<Guidance />} /> 
          <Route path="/blog" element={<Blog/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<ContactUs/>} /> 
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/myproduct" element={<MyProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
