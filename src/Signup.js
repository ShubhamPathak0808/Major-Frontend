import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './signup.css';
import { withRouter } from 'react-router-dom';
import axios from "axios";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
            role:"user"
        }
        this.nameChange = this.nameChange.bind(this);
        this.roleChange = this.roleChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.enter = this.enter.bind(this);
    }
    nameChange(e){
      this.setState({name:e.target.value});
    }
    emailChange(e){
      this.setState({email:e.target.value});
    }
    roleChange(e){
      this.setState({role:e.target.value});
    }
    passwordChange(e){
      this.setState({password:e.target.value});
    }
    enter(e){
        e.preventDefault();
        var data={
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          role:this.state.role
        }
        console.log(data)
          axios.post('http://10.25.100.17:8000/user/signup',data).then((res)=>{
            if(res.data.email){
              var d={email:res.data.email,role:res.data.role,name:res.data.name}
              localStorage.setItem('email',d.email)
              localStorage.setItem('role',d.role)
              localStorage.setItem('name',d.name)
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
              alert(res.data);
            }
          })
    }
    render(){
        return(
          <div style={{backgroundColor:'white',minHeight:'100%',height:'auto',paddingTop:'10vh',paddingBottom:'10vh'}}>
             <div className="signup-box">
               <div className="heading"><h1 style={{ textAlign: 'center',fontSize:'2rem' }}>SignUp</h1></div>
               <form>
               <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%' }}>
              <div style={{ width: '100%', textAlign: 'left', fontSize: '1.2rem', marginTop: '2px' }}><label for="name">Name</label>
              <div><input style={{ width: '100%', borderRadius: 2, border: 0, height: '2.2rem', marginTop: 2, backgroundColor: 'rgb(225, 240, 255)', fontSize: '1.2vw' }} onChange={this.nameChange} type="text" id="name" name="name" /></div></div>
              <div style={{ width: '100%', textAlign: 'left', fontSize: '1.2rem', marginTop: '2px' }}><label for="email">Email</label>
              <div><input style={{ width: '100%', borderRadius: 2, border: 0, height: '2.2rem', marginTop: 2, backgroundColor: 'rgb(225, 240, 255)', fontSize: '1.2vw' }} onChange={this.emailChange} type="text" id="email" name="email" /></div></div>

            <div style={{ width: '100%', textAlign: 'left', fontSize: '1.2rem', marginTop: '2px' }}><label for="password">Password</label>
              <div><input style={{ width: '100%', borderRadius: 2, border: 0, height: '2.2rem', marginTop: 2, backgroundColor: 'rgb(225, 240, 255)', fontSize: '1.2vw' }}onChange={this.passwordChange} type="password" id="password" name="password" /></div></div>
              <div style={{ width: '100%', textAlign: 'left', fontSize: '1.2rem', marginTop: '2px' }}><label for="role">Role</label>
             <div> <select onChange={this.roleChange}  name="role" id="role" style={{width:'100%',height:'2.3rem',backgroundColor: 'rgb(225, 240, 255)'}}>
               <option value="user">User</option>
               <option value="admin">Admin</option>
               <option value="supAdmin">supAdmin</option>
                </select></div></div>

             <input type="submit" value="SignUp" onClick={this.enter} style={{
              backgroundColor: '#007bff',
              color:"white",
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
            <p><Link to="/login" style={{color:'#007bff',fontSize:'16px',float:'right',cursor:'pointer',marginTop:'3%'}}>Already have an account</Link></p>
          </div>
               </form>
        </div>
          </div>);
    }
}
export default  withRouter (Signup);