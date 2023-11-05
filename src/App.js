// import logo from './logo.svg';
import './App.css';
import Application  from './main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Admin  from './Admin';
import Login  from './login';
import Signup from './Signup';
import Header from './HeaderComponent';
import Student from './StudentComponent';
import Teacher from './TeacherComponent.js';
import ProtectedRoute2 from './ProtectedRoute2';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Main from './MainPage.js';
import About from './AboutComponent.js';
import Assignment from './AssignmentComponent';
function App() {
  return (
    <div className="App">
        <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <ProtectedRoute2 exact path='/student' component={Student}/>
        <ProtectedRoute2 exact path="/teacher" component={Teacher} />
        <Route exact path="/books" component={Application}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/aboutus" component={About}/>
        <Route exact path='/assignment' component={Assignment}/>
        <Route exact path='/contactus'  />
      </Switch>
      <Footer/>
    </Router>
    </>
    </div>

  );
}

export default App;