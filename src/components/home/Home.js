import React from 'react';
import './Home.css';
import background from '../../background.jpeg';
import Para from '../para/Para';

class Home extends React.Component{
  render(){

    return(
      <div>
        <h1 className="heading"> Home  </h1>
        <div className="paradiv">
        <Para/> <Para/>
        </div>
        <img style={{width: '100%', margin:'auto', display:'block'}} src={background} alt="background"/>

      </div>
    )
  }
}
export default Home;
