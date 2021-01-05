import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      authorize: false,
      counter: 1
    }

  }

  checkAuthorize = () => {
    if(this.props.user.password === document.querySelector(".form-control").value){
      this.setState({authorize: true})
    }else{
      this.setState({counter: this.state.counter +1})
      alert("Please try again")
      if(this.state.counter ===3){
        document.querySelector("#input_value").disabled = true;
        document.querySelector(".btn").disabled = true;
        setTimeout(()=>{
          document.querySelector("#input_value").disabled = false;
          document.querySelector(".btn").disabled = false;
        },5000)
        document.querySelector("#input_value").value= "";
      }
    }
  }


  render() {
    
let login = (
  <div className="card">
        <form class="form-inline" action='#'>
          <div class="form-group">
            <input type="password" id="input_value" class="form-control mx-sm-3" placeholder="Password"/>
            <button type="submit" class="btn btn-primary" onClick={this.checkAuthorize}>Submit</button>
          </div>
        </form>
      </div>
);

let contact= (
  <div className="card">
    <div className="top">
        <h2 className="name">{this.props.user.name}</h2>
        <img className="circle-img" src={this.props.user.imgURL} />
      </div>
      <div className="bottom">
        <p className="info">{this.props.user.phone}</p>  
        <p className="info">{this.props.user.mail}</p>
      </div>
  </div>
)

return (
  <div id="authorization">
    <h1>Enter the Password</h1>
    <div>
      {this.state.authorize === false ? login: contact}
    </div>
    
  </div>
)
  }
}


export default Login;