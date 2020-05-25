import React, {Component} from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state ={
      username : '',
      email:  '',
      password: ''
    };
  }
  changeEvent=(e)=>{
    e.preventDefault();
    const { value, name } = e.target
    this.setState({
    [name]:value
  });

  }
  onSubmit=(e)=>{
    e.preventDefault();
    /*React uses synthetic events to handle events from button, input and form elements. ...
    It demonstrates how to add an item to a list by using a form element with input and
    button elements. In this case, a preventDefault is called on the event
    when submitting the form to prevent a browser reload/refresh.*/
    console.log(this.state);

    }
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}  className="container mt-5" >

          <label> Username: </label>
          <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="text" name="username" value={this.state.username}/>

          <label> Email: </label>
          <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="email" name="email" value={this.state.email}/>

          <label> Password: </label>
          <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="password" name="password" value={this.state.password}/>

          <input className="form-control mt-5 mb-5" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Contact;
