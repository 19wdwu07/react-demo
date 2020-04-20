import React from 'react';
import './About.css';
import Imagge from '../imagge/Imagge';

import Para from '../para/Para';

class About extends React.Component{
  render(){
    return(
      <div>
          <h1 className="heading"> About  </h1>
          <Para/>
          <Imagge/>
      </div>
    )
  }

}
export default About;
