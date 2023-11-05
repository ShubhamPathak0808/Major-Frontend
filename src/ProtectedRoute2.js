import React from "react";
import { Route, Redirect } from "react-router-dom";
import Admin from "./Admin";
import Teacher from "./TeacherComponent";
import Student from "./StudentComponent";

function ProtectedRoute2({ component: Component,}) {
  const isAuthenticated = localStorage.getItem('email')?true:false;
  var user=false;
  var admin=false;
  var supAdmin=false;
  if(localStorage.getItem('role')==="user"){
      user=true;
  }
  if(localStorage.getItem('role')==="admin"){
    admin=true;
  }
  if(localStorage.getItem('role')==="supAdmin"){
    supAdmin=true;
  }
  // console.log("this ", isAuthenticated);
    return (
      <Route
        render={() =>
          isAuthenticated ?user?<Student/>:admin?<Teacher/>:supAdmin?<Hod/>:<Redirect to="signup"/>:<Redirect to="/signup"/>
        }
      />
    );
}
export default (ProtectedRoute2);