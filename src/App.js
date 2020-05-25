import React from 'react';
import './custom.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';



class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="header">
          <h1 className="h1"> React Demo Site</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <Home/>
        <About/>
        <Products/>
        <Contact/>
      </div>
    )
  }
}
export default App;
