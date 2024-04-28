import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';
import './signup.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email_id:"",
          password:"",
          isAuthenticated:false
        }
        this.enter = this.enter.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }
    emailChange(e){
      this.setState({email_id:e.target.value});
    }
    passwordChange(e){
      this.setState({password:e.target.value});
    }
    enter(e){
      e.preventDefault();
      var data={

        email:this.state.email_id,
        password:this.state.password,
      }
      // console.log(data)
        axios.post('http://10.25.101.103:8000/user/login',data).then((res)=>{
          console.log(res.data)
         if(res.data.email){
           var d={email:res.data.email,role:res.data.role}
          localStorage.setItem('email',d.email)
          localStorage.setItem('role',d.role)
          this.setState({isAuthenticated:true});
          if(d.role==='user'){
            window.location.href = `/student`;
          }
          else if(d.role === 'supAdmin'){
            window.location.href = `/hod`;
          }
          else{
            window.location.href = `/teacher`;
          }
         }
         else{
           alert(res.data)
         }

        })
      }
    render(){
        return(
          <div style={{backgroundColor:'white',minHeight:'100%',height:'100vh',paddingTop:'10vh'}}>
             <div className="login-box" >
               <div className="heading"><h1 style={{ textAlign: 'center' ,fontSize:'2rem'}}>Login</h1></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%' }}>
            <div style={{ width: '100%', textAlign: 'left', fontSize: '1.2rem', marginTop: '2px' }}><label for="email">Email</label>
              <div><input style={{ width: '100%', borderRadius: 2, border: 0, height: '2.2rem', marginTop: 2, backgroundColor: 'rgb(225, 240, 255)', fontSize: '1.2vw' }} onChange={this.emailChange} type="text" id="email" name="email" /></div></div>
            <div style={{ width: '100%', textAlign: 'left', fontSize: '1.2rem', marginTop: '2px' }}><label for="password">Password</label>
              <div><input style={{ width: '100%', borderRadius: 2, border: 0, height: '2.2rem', marginTop: 2, backgroundColor: 'rgb(225, 240, 255)', fontSize: '1.2vw' }} onChange={this.passwordChange}  type="password" id="password" name="password" /></div></div>
             <input type="submit" value="Login"  onClick={this.enter}  style={{
              backgroundColor: '#007bff',
              color:'white',
              marginTop: '1%',
              border: 0,
              borderRadius: 4,
              width: '100%',
              height: '3vw',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '1.3vw',
              marginTop: '10vh'
            }} />
          </div>
          <p><Link to="/signup" style={{color:'#007bff',fontSize:'16px',float:'right',cursor:'pointer',marginTop:'3%'}}>Don't have an account</Link></p>
        </div>
          </div>);
    }
}
export default withRouter (Login);