import React from "react";
import { BookOpen } from "react-feather";
import GetStarted from "./GetStarted";
import RegistrationDetails from "./RegistrationDetails";
import Login from "./Login";
import registerPic from "../../assets/register.png";
import logo from "../../assets/logo.png"
// import "../../App.css";


const LandingPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [userType, setUserType] = React.useState("student");

  const [studentDetails, setStudentDetails] = React.useState({
    department: "",
    year: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    _id: "",
  });

  const [teacherDetails, setTeacherDetails] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    _id: "",
  });

  const [hodDetails, setHodDetails] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    _id: "",
  });

  return (
    <>


      {/* self shubham */}
      <div className="row" style={{marginRight : "0"}}>

        <div className="col-lg-6 col-md-12" style={{textAlign : "center", margin : "0"}}>
          <img src={registerPic} style={{width: "90%", alignSelf: "center"}}/>
        </div>

        <div className="col-lg-6 col-md-12" style={{margin : "0"}}>
          {isLogin ? (
            <Login
              userType={userType}
              setUserType={setUserType}
              setStudentDetails={setStudentDetails}
              studentDetails={studentDetails}
              setTeacherDetails={setTeacherDetails}
              teacherDetails={teacherDetails}
              setHodDetails={setHodDetails}
              hodDetails={hodDetails}
              goBack={() => setShowForm(false)}
              setLogin={() => setIsLogin(false)}
            />
          ) : (
            <RegistrationDetails
              userType={userType}
              setUserType={setUserType}
              setStudentDetails={setStudentDetails}
              goBack={() => setShowForm(false)}
              setLogin={() => setIsLogin(true)}
            />
          )}
        </div>

      </div>

    </>

  );
};

export default LandingPage;



// {/* <div className="row"
// style={{
//   // width: "100%",
//   height: window.innerHeight,
//   // display: "flex",
//   // flexDirection: "row",
//   overflow: "visible",
// }}
// >
// 
// {/* Left side */}
// <div className="col-6"
//   style={{
//     // width: "50%",
//     // height: "100%",
//     overflow: "visible",
//     zIndex: 999,
//   }}
// >
//   <img
//     src={registerPic}
//     style={{ width: "100%", alignSelf: "center", zIndex: 999 }}
//   />
// </div>
// 
// {/* <div className="col-5">
// hiiiiii
// </div> */}
// 
// {/* Right main side */}
// <div className="col-6"
//   style={{
//     // width: "50%",
//     height: "100%",
//     backgroundColor: "white",
//     // display: "flex",
//     // padding: "2rem",
//     // flexDirection: "column",
//     // justifyContent: "flex-start",
//     zIndex: 998,
//     // paddingLeft: "3rem",
//   }}
// >
//   {/* {showForm ? ( */}
//   {isLogin ? (
//     <Login
//       userType={userType}
//       setUserType={setUserType}
//       setStudentDetails={setStudentDetails}
//       studentDetails={studentDetails}
//       setTeacherDetails={setTeacherDetails}
//       teacherDetails={teacherDetails}
//       setHodDetails={setHodDetails}
//       hodDetails={hodDetails}
//       goBack={() => setShowForm(false)}
//       setLogin={() => setIsLogin(false)}
//     />
//   ) : (
//     <RegistrationDetails
//       userType={userType}
//       setUserType={setUserType}
//       setStudentDetails={setStudentDetails}
//       goBack={() => setShowForm(false)}
//       setLogin={() => setIsLogin(true)}
//     />
//   )}
//   {/* ) : (
//   // <GetStarted goNext={() => setShowForm(true)} />
//   <div></div>
// )} */}
// </div>
// </div> */}