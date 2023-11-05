import React from "react";
import {  Switch,BrowserRouter,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainerCustom } from "./components/Toast";
import { Scrollbars } from 'react-custom-scrollbars';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Hodhome from "./components/hod/Hodhome";
import Notes from "./components/Notes";
import Search from "./components/Search";
import Course from "./components/Course";
import Quiz from "./components/Quiz";
import Attendence from "./components/Attendence";
// import Attendance from "./components/Attendance";
import AssignmentDetails from "./components/AssignmentDetails";
import AssessmentReport from "./components/AssessmentReport";
import QuizQuestion from "./components/QuizQuestion";
import ResetPassword from "./components/LandingPage/ResetPassword";
import About from './AboutComponent.js';
import Application  from './main';
import Admin from "./Admin";
import Extra from "./extra";
import LandPage from "./components/newSp";
// import Timer from "./components/Timer";
import QuizTimer from "./components/Timer";
//new document
import Header from "./new/comps/header/Header";
import Sb from "./new/comps/sb/Sb";
import  Navbar  from "./new/comps/navbar/Navbar";
import Aboutus from './new/comps/about/About'
import Subscription from './new/comps/subscription/Subscription'
import Products from './new/comps/products/Products'
import Blogs from './new/comps/blogs/Blogs'
import Faq from './new/comps/faq/Faq'
import Contact from './new/comps/contact/Contact'
import Footer from './new/comps/footer/Footer'

const b = localStorage.getItem("userType");
  const userType = b ? JSON.parse(b) : "student";
function App() {
  const ApplicationPage=()=>{
    if(userType==="student")
    {
      return(
        <><Application/><Sidebar/></>
      )
    }
    else{
      return(
      <><Admin/><Sidebar/></>
      // <div></div>
      )
    }
  }
  const HeaderPage=()=>{
    return(
      <div >
                <Sb />
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    <About />
                    {/* <Subscription /> */}
                    {/* <Products /> */}
                    {/* <Blogs /> */}
                    {/* <Faq /> */}
                    <Contact />
                </div>

                {/* <div className = '_footer'>
                    <Footer />
                </div> */}
            </div>
    )
  }
  const handleTimeUp = () => {
    // handle time up event
  };

  return(
    <div>
    <BrowserRouter>
    {/* <Sidebar/> */}
      <Switch>
        <Route exact path='/' component={HeaderPage}/>
        <Route exact path='/getStarted' component={LandingPage}/>
       <Route exact path="/reset-password/*" component={ResetPassword} />
       <Route exact path="/home" render={() => (
          userType === "hod" ? <><Hodhome /><Sidebar /></> : <><Home /><Sidebar /></>
      )}/>
      <Route path="/notes" render={()=><><Notes /><Sidebar /></>}exact/>
      {/* <Route exact path="/books" component={Application}/> */}
      {/* <Route path='/books' render={()=><><Application/><Sidebar/></>}/> */}
      <Route exact path="/aboutus" component={About}/>
      <Route path="/search" render={()=><><Search /><Sidebar /></>} exact/>
      <Route path="/course/*" render={()=><><Course /><Sidebar /></>}exact/>
      <Route path="/assignment/*" render={()=><><AssignmentDetails /><Sidebar /></>}exact/>
      <Route path="/assessmentReport/*" render={()=><><AssessmentReport /><Sidebar /></>}exact/>
      <Route path="/quiz/*" render={()=><><Quiz /><Sidebar /></>}exact/>
      <Route path="/attendence/*" render={()=><><Attendence /><Sidebar /></>}exact/>
      {/* <Route path="/attendance/*" render={()=><><Attendance/><Sidebar/></>} exact/> */}
      <Route path="/books" render={ApplicationPage}/>
      <Route path="/createQuiz/*" render={()=><><QuizQuestion /><Sidebar /></>}exact/>
      {/* <Route path="/extra" render={Extra}/> */}
      <Route path="/lp" render={LandPage}/>
      <Route path="/timer" render={()=><QuizTimer duration={7200} onTimeUp={handleTimeUp}/>}/>
      </Switch>
    </BrowserRouter>
  </div>
  )
  // let width = window.innerWidth
  // let height = window.innerHeight
  // return (

  //   <div>
  //     {/* <Home/> */}
  //     <LandingPage/>
  //     {/* Hello there */}
  //     <Scrollbars

  //   style={{ width, height, backgroundColor: "transparent" }}
  //   autoHide
  //   autoHideDuration={1000}
  //   autoHideTimeout={800}
  //   renderThumbVertical={({ style, ...props }) => (
  //     <div
  //       {...props}
  //       className="subBG"
  //       style={{
  //         ...style,
  //         opacity: 0.4,
  //         borderRadius: 10,
  //         width: 8,
  //         paddingRight: 10,
  //         marginRight: 10,
  //       }}
  //     />
  //   )}
  // >
  //   <BrowserRouter>

  //    <Switch>
  //     {/* <div>Hello How are you</div> */}
  //     {/* <Route path="/" component={LandingPage} /> */}
  //     {/* <Route exact path='/notes' component={Notes}/> */}
  //     <Route exact path="/reset-password/*" component={ResetPassword} />
  //     <Route path="/home" component={<><Home /><Sidebar /></>} exact/>
  //     <Route path="/notes" element={<><Notes /><Sidebar /></>}exact/>
  //     <Route path="/search" element={<><Search /><Sidebar /></>}exact/>
  //     <Route path="/course/*" element={<><Course /><Sidebar /></>}exact/>
  //     <Route path="/assignment/*" element={<><AssignmentDetails /><Sidebar /></>}exact/>
  //     <Route path="/assessmentReport/*" element={<><AssessmentReport /><Sidebar /></>}exact/>
  //     <Route path="/quiz/*" element={<><Quiz /><Sidebar /></>}exact/>
  //     <Route path="/createQuiz/*" element={<><QuizQuestion /><Sidebar /></>}exact/>
  //     </Switch>
  //     </BrowserRouter>
  //   <ToastContainerCustom />
  // </Scrollbars>
  //   </div>
  // );
}

export default App;
