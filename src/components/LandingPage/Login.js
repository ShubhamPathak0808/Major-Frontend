import React from "react";
import Axios from "axios";
import validator from "validator";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import md5 from "md5";
import "../../App.css";
import { ArrowLeft, Eye, EyeOff, Briefcase, Dribbble, Monitor } from "react-feather";
import userImage from "../../assets/user4.png";
import "./strong.css";

let randomUser = userImage;

const encrypt = (password) => {
  const buffer1 = md5(password);
  const buffer2 = md5(buffer1);
  return md5(buffer2);
};

const Login = ({
  goBack,
  setLogin,
  userType,
  setUserType,
  studentDetails,
  setStudentDetails,
  teacherDetails,
  setTeacherDetails,
  hodDetails,
  setHodDetails
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [viewPassword, setViewPassword] = React.useState(true);
  const [isStudent, setIsStudent] = React.useState(true);
  const [isTeacher, setIsTeacher] = React.useState(false);
  const [isHod, setIsHod] = React.useState(false);
  const [forgotPassword, setForgotPassword] = React.useState(false);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const validatePassword = () => {
    return validator.isLength(password, { min: 5 });
  };

  const validateEmail = () => {
    return validator.isEmail(email);
  };

  const loginStudent = () => {
    if (!validateEmail() || !validatePassword()) {
      return Swal.fire("Error", "Form is invalid");
    }

    Axios.post("http://10.25.100.77:8000/api/students/login", {
      email: email,
      password: (password),
    })
      .then((res) => {
        if (res.data.data) {
          const details = res.data.data;
          setStudentDetails(details);
          Swal.fire({ text: "Logging in", icon: "success" });
          setTimeout(() => {
            localStorage.setItem("userDetails", JSON.stringify(details));
            localStorage.setItem("userType", JSON.stringify("student"));
            window.location.href = "/home";
          }, 1000);
        } else if (!res.data.data) {
          Swal.fire({ text: "Email or password is incorrect", icon: "error" });
        } else {
          Swal.fire("Error", "Email or password is incorrect");
        }
      })
      .catch((error) => {
        Swal.fire({ text: "Email or password is incorrect", icon: "error" });
      });
  };

  const forgotPasswordLink = () => {
    if (!validateEmail()) {
      return Swal.fire("Error", "Form is invalid");
    }

    Axios.post("http://10.25.100.77:8000/api/getResetLink", {
      email: email,
      user_type: isStudent ? "student" : isTeacher ? "teacher" : "hod",
    })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            text: "Please check your email for reset link",
            icon: "success",
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        } else if (!res.data.data) {
          Swal.fire("Error", "Oops! Something went wrong");
        }
      })
      .catch((error) => {
      });
  };

  const loginTeacher = () => {
    if (!validateEmail() || !validatePassword()) {
      return Swal.fire("Error", "Form is invalid");
    }

    Axios.post("http://10.25.100.77:8000/api/teachers/login", {
      email: email,
      password: (password),
    })
      .then((res) => {
        if (res.data.data) {
          const details = res.data.data;
          setTeacherDetails(details);
          Swal.fire({ text: "Logging in", icon: "success" });
          setTimeout(() => {
            localStorage.setItem("userDetails", JSON.stringify(details));
            localStorage.setItem("userType", JSON.stringify("teacher"));
            window.location.href = "/home";
          }, 1000);
        } else if (!res.data.data) {
          Swal.fire({ text: "Email or password is incorrect", icon: "error" });
        } else
          Swal.fire({ text: "Email or password is incorrect", icon: "error" });
      })
      .catch(() => {
        Swal.fire({ text: "Email or password is incorrect", icon: "error" });
      });
  };

  const loginHod = () => {
    if (!validateEmail() || !validatePassword()) {
      return Swal.fire("Error", "Form is invalid");
    }

    Axios.post("http://10.25.100.77:8000/api/hod/login", {
      email: email,
      password: (password),
    })
      .then((res) => {
        if (res.data.data) {
          const details = res.data.data;
          setHodDetails(details);
          Swal.fire({ text: "Logging in", icon: "success" });
          setTimeout(() => {
            localStorage.setItem("userDetails", JSON.stringify(details));
            localStorage.setItem("userType", JSON.stringify("hod"));
            window.location.href = "/home";
          }, 1000);
        } else if (!res.data.data) {
          Swal.fire({ text: "Email or password is incorrect", icon: "error" });
        } else
          Swal.fire({ text: "Email or password is incorrect", icon: "error" });
      })
      .catch(() => {
        Swal.fire({ text: "Email or password is incorrect", icon: "error" });
      });
  };

  return (
    <React.Fragment>
      {forgotPassword ? (
        <div
          style={{
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, .2)",
            height: "600px",
            marginTop: "20px",
            marginRight: "30px"
          }}
        >
          <ArrowLeft
            size={25}
            color="#545454"
            onClick={() => goBack()}
            style={{ cursor: "pointer", position: "absolute" }}
          />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div
              style={{
                // width: "auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: "5%",
                marginTop: 10,
              }}
            >
              <div className="yo"
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "5rem",
                  backgroundColor: "#eeeeee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={randomUser}
                  style={{ width: "3.5rem", marginTop: 10 }}
                />
              </div>
              <div className="yo" style={{ marginLeft: "1rem" }}>
                <h2
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#545454",
                    fontWeight: 600,
                    fontSize: 26,
                  }}
                >
                  Forgot password?
                </h2>
                <p className="yo"
                  style={{
                    fontFamily: "Mulish",
                    fontSize: 17,
                    color: "#ababab",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Enter registered email id to get password reset link
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#545454",
                fontWeight: 600,
                margin: 0,
                textAlign: "center",
                marginBottom: "0.5rem",
                marginTop: 30,
              }}
            >
              Are you a student or teacher/HOD?
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <label
                  class="checkbox-container"
                  style={{ borderColor: isStudent ? "#6C63FF" : "#eee" }}
                >
                  <Dribbble
                    size={22}
                    style={{ marginRight: 15 }}
                    color="#545454"
                  />
                  Student
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsStudent(true);
                      setUserType("student");
                      setIsTeacher(false);
                      setIsHod(false);
                    }}
                    checked={isStudent}
                  />
                  <span class="checkmark"></span>
                </label>
                <label
                  class="checkbox-container"
                  style={{ borderColor: isTeacher ? "#6C63FF" : "#eee" }}
                >
                  <Briefcase
                    size={22}
                    style={{ marginRight: 15 }}
                    color="#545454"
                  />
                  Teacher
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsTeacher(true);
                      setIsStudent(false);
                      setIsHod(false);
                      setUserType("teacher");
                    }}
                    checked={isTeacher}
                  />
                  <span class="checkmark"></span>
                </label>
                <label
                  class="checkbox-container"
                  style={{ borderColor: isHod ? "#6C63FF" : "#eee" }}
                >
                  <Briefcase
                    size={22}
                    style={{ marginRight: 15 }}
                    color="#545454"
                  />
                  HOD
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsHod(true);
                      setIsTeacher(false);
                      setIsStudent(false);
                      setUserType("hod");
                    }}
                    checked={isHod}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "#545454",
                  fontWeight: 600,
                  textAlign: "right",
                }}
              >
                Enter Email
              </p>
              <div
                style={{
                  alignItems: "flex-start",
                  marginLeft: "30px",
                  display: "flex",
                }}
              >
                <input
                  type="email"
                  placeholder="Email ID"
                  onChange={onChangeEmail}
                  style={{ width: "15vw", height: "5vh" }}
                  onBlur={() =>
                    validateEmail()
                      ? null || true
                      : toast.error("Invalid Email ID")
                  }
                />
              </div>
            </div>
            <div
              style={{
                marginTop: 60,
                alignItems: "flex-end",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button onClick={forgotPasswordLink}
                className="btn btn-new">
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "white",
                    margin: 0,
                    fontFamily: "Poppins",
                    letterSpacing: 0.4,
                  }}
                >
                  Send Email
                </p>
              </button>
            </div>
          </div>

          <br />
        </div>
      ) : (
        <div
          style={{
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, .2)",
            // height: "637px",
            marginTop: "10px",
            // marginRight: "30px"
          }}
        >
          <ArrowLeft
            size={25}
            color="#545454"
            onClick={() => goBack()}
            style={{ cursor: "pointer" }}
          />
          <div
            style={{
              float: "right",
              fontFamily: "Poppins",
              fontSize: 16,
              color: "#6C63FF",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => setLogin()}
          >
            New here ? Register now
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "2px solid black", padding: "10px" }}>
            <div
              style={{
                width: "auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: "5%",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "5rem",
                  backgroundColor: "#eeeeee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={randomUser}
                  style={{ width: "3.5rem", marginTop: 10 }}
                />
              </div>
              <div className="yo" style={{ marginLeft: "1rem" }}>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    color: "#545454",
                    fontWeight: 600,
                    fontSize: 26,
                  }}
                >
                  Welcome Back
                </h2>
                <p
                  style={{
                    fontFamily: "Mulish",
                    fontSize: 17,
                    color: "#ababab",
                    fontWeight: 600,
                    margin: 0,
                    textAlign: "center"
                  }}
                >
                  Enter your login credentials to access your classroom
                </p>
              </div>
            </div>
            <p className="yo"
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#545454",
                fontWeight: 600,
                margin: 0,
                textAlign: "left",
                marginBottom: "0.5rem",
                marginTop: 30,
              }}
            >
              Log in as a student or a teacher/hod ?
            </p>

            <div className="yo"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // alignItems: "center",
                width: "100%"
              }}
            >

              {/* student */}
              <div style={{ width: "30%" }}>
                <label
                  class="checkbox-container"
                  style={{ borderColor: isStudent ? "#6C63FF" : "#eee", width: "100%" }}
                >
                  <Dribbble
                    size={22}
                    style={{ marginRight: 15 }}
                    color="#545454"
                  />
                  Student
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsStudent(true);
                      setUserType("student");
                      setIsHod(false);
                      setIsTeacher(false);
                    }}
                    checked={isStudent}
                  />
                  {/* <span class="checkmark"></span> */}
                </label>
              </div>


              {/* Teacher */}
              <div style={{ width: "30%" }}>
                <label
                  class="checkbox-container"
                  style={{ borderColor: isTeacher ? "#6C63FF" : "#eee" , width: "100%"}}
                >
                  <Briefcase
                    size={22}
                    style={{ marginRight: 15 }}
                    color="#545454"
                  />
                  Teacher
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsStudent(false);
                      setIsTeacher(true);
                      setIsHod(false);
                      setUserType("teacher");
                    }}
                    checked={isTeacher}
                  />
                  {/* <span class="checkmark"></span> */}
                </label>
              </div>

              {/* raghav */}
              <div style={{ width: "30%" }}>
                <label
                  class="checkbox-container"
                  style={{ borderColor: isHod ? "#6C63FF" : "#eee", width:"100%" }}
                >
                  <Briefcase
                    size={22}
                    style={{ marginRight: 15 }}
                    color="#545454"
                  />
                  HOD
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsHod(true);
                      setIsTeacher(false);
                      setIsStudent(false);
                      setUserType("hod");
                    }}
                    checked={isHod}
                  />
                  {/* <span class="checkmark"></span> */}
                </label>
              </div>


            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "#545454",
                  fontWeight: 600,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Enter Your Registered Email & Password
              </p>
            </div>
            <div className="yo"
              style={{
                display: "flex",
                marginTop: "10px",
                width:"100%"
              }}
            >
              <input
                type="email"
                placeholder="Email ID"
                onChange={onChangeEmail}
                style={{ width: "100%", height: "45px", borderRadius: "3px", marginRight: "10px", border: "3px solid #EFEFEF" }}
                onBlur={() =>
                  validateEmail()
                    ? null || true
                    : toast.error("Invalid Email ID")
                }
              />
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "left",
                  width: "100%",
                }}
              >
                <div>
                  <input
                    type={viewPassword ? "password" : "text"}
                    placeholder="Password"
                    onChange={onChangePassword}
                    style={{ width: "100%", height: "45px", borderRadius: "3px", marginRight: "10px", border: "3px solid #EFEFEF" }}
                  />
                </div>

                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "45px" }}>
                  {viewPassword ? (
                    <Eye
                      size={22}
                      color="#ababab"
                      style={{
                        marginTop: 10,
                        marginLeft: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setViewPassword(!viewPassword)}
                    />
                  ) : (
                    <EyeOff
                      size={22}
                      color="#ababab"
                      style={{
                        marginTop: 10,
                        marginLeft: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setViewPassword(!viewPassword)}
                    />
                  )}
                </span>
              </div>
            </div>
            <button style={{ width: "150px", marginTop: "80px" }}
              onClick={userType === "student" ? loginStudent : userType === "teacher" ? loginTeacher : loginHod}
              className="btn btn-new"
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "white",
                  textAlignLast: "center",
                  // backgroundColor: "#6C63FF",
                  margin: 0,
                  fontFamily: "Poppins",
                  letterSpacing: 0.4,
                }}
              >
                Login
              </p>
            </button>
          </div>

          <br />
          <div
            style={{
              marginTop: "100px",
              float: "right",
              fontFamily: "Poppins",
              fontSize: 15,
              color: "#6C63FF",
              fontWeight: 400,
              cursor: "pointer",
            }}
            onClick={() => {
              setForgotPassword(true);
            }}
          >
            Forgot password?
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
