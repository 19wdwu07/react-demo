import React from 'react';
import './Imagge.css';
import background from '../../background.jpeg';

class Imagge extends React.Component{
  render(){
    const myImage={
      width: '45%',
      margin:'auto',
      display:'block',
      marginTop: '75px'
    }

    return(
      <div>
      {/*Take note of the camel case in the object above for marginTop. Whenever two words were used
        hyphenated in css, it should use camelcase in objects for styling.*/}
        <img style={myImage} src={background} alt="background"/>
      </div>
    )
  }
}

export default Imagge;
