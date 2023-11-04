import React from "react";
import Dropdown from "react-dropdown";
import Axios from "axios";
import validator from "validator";
import { toast } from "react-toastify";
import "../../App.css";
import "react-dropdown/style.css";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import md5 from "md5";
import { Eye, EyeOff, Briefcase, Dribbble } from "react-feather";     //check {ArrowLeft is removed}
import ArrowLeft from "../ArrowLeft";
import userImage from "../../assets/user4.png";

let randomUser = userImage;

export const yearOptions = [
  {
    value: "First Year",
    label: "First Year",
  },
  {
    value: "Second Year",
    label: "Second Year",
  },
  {
    value: "Third Year",
    label: "Third Year",
  },
  {
    value: "Fourth Year",
    label: "Fourth Year",
  },
];

export const departmentOptions = [
  {
    value: "EI",
    label: "Electronics & Instrumentation",
  },
];

const encrypt = (password) => {
  const buffer1 = md5(password);
  const buffer2 = md5(buffer1);
  return md5(buffer2);
};

const RegistrationDetails = ({ goBack, setLogin, userType, setUserType }) => {
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [viewPassword, setViewPassword] = React.useState(true);
  const [studentClass, setStudentClass] = React.useState(yearOptions[0].value);
  const [studentDepartment, setStudentDepartment] = React.useState(
    departmentOptions[0].value
  );
  const [isStudent, setIsStudent] = React.useState(userType === "student");

  const onChangefName = (e) => setfName(e.target.value);
  const onChangelName = (e) => setlName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const validateFName = () => {
    return !validator.isEmpty(fName) && validator.isAlpha(fName);
  };

  const validateLName = () => {
    return validator.isAlpha(lName);
  };

  const validatePassword = () => {
    return validator.isLength(password, { min: 5 });
  };

  const validateEmail = () => {
    return validator.isEmail(email);
  };

  const registerStudent = () => {
    if (
      !validateEmail() ||
      !validateLName() ||
      !validateFName() ||
      !validatePassword()
    ) {
      return toast.error(
        "Invalid form. Please ensure you have filled all fields"
      );
    }
    console.log(password)
    Axios.post("http://localhost:8000/api/students", {
      fName,
      lName,
      email,
      password:password,
      year: studentClass,
      department: studentDepartment,
    })
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          Axios.post("http://localhost:8000/api/students/login", {
            email: email,
            password: password,
          }).then((res) => {
            if (res.data.data) {
              const details = res.data.data;
              Swal.fire({
                icon: "success",
                text: "Registration successful! Logging in...",
              });
              setTimeout(() => {
                localStorage.setItem("userDetails", JSON.stringify(details));
                localStorage.setItem("userType", JSON.stringify("student"));
                window.location.href = "/home";
              }, 2000);
            }
          });
        } else if (res.data.success === false) {
          if (res.data.reason === "Email already exists") {
            toast.error("Account with this Email already exists");
          } else {
            toast.error("Error");
          }
        } else {
          toast.error("Error");
        }
      })
      .catch((err) => {
        toast.error("Error");
      });
  };

  const registerTeacher = () => {
    if (
      !validateEmail() ||
      !validateLName() ||
      !validateFName() ||
      !validatePassword()
    ) {
      return toast.error(
        "Invalid form. Please ensure you have filled all fields."
      );
    }

    Axios.post("http://localhost:8000/api/teachers", {
      fName,
      lName,
      email,
      password:password,
    })
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          Axios.post("http://localhost:8000/api/teachers/login", {
            email: email,
            password: password,
          }).then((res) => {
            if (res.data.data) {
              const details = res.data.data;
              Swal.fire({
                icon: "success",
                text: "Registration successful! Logging in...",
              });
              setTimeout(() => {
                localStorage.setItem("userDetails", JSON.stringify(details));
                localStorage.setItem("userType", JSON.stringify("teacher"));
                window.location.href = "/home";
              }, 2000);
            }
          });
        } else if (res.data.success === false) {
          if (res.data.reason === "Email already exists") {
            toast.error("Account with this Email already exists");
          } else {
            toast.error("Error");
          }
        } else {
          toast.error("Error");
        }
      })
      .catch((err) => {
        toast.error("Error");
      });
  };

  return (
    <React.Fragment>
      <div 
        style={{
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, .2)",
          height:"630px",
          marginTop:"7px",
          marginRight:"30px"
        }}
        >
      {/* <ArrowLeft                       //check
        size={25}
        color="#545454"
        onClick={() => goBack()}
        style={{ cursor: "pointer" }}
      /> */}
      <ArrowLeft />                      {/* updated */}
      <div
        style={{
          float:"right",
          fontFamily: "Poppins",
          fontSize: 16,
          color: "#6C63FF",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => setLogin()}
      >
        Already have an account ? Login now
      </div>
      <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
      <div
        style={{
          width: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent:"center",
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
          <img src={randomUser} style={{ width: "3.5rem", marginTop: 10 }} />
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <h2
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              color: "#545454",
              fontWeight: 600,
              fontSize: 26,
            }}
          >
            Welcome
          </h2>
          <p
            style={{
              fontFamily: "Mulish",
              fontSize: 17,
              color: "#ababab",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Enter few more details to get started
          </p>
        </div>
      </div>
      {/* <p                             //check
        style={{
          fontFamily: "Poppins",
          fontSize: 16,
          color: "#545454",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "0.5rem",
          marginTop:"30px"
        }}
      >
        Are you a student or a teacher/instructor ?
      </p> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"center"
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
            <Dribbble size={22} style={{ marginRight: 15 }} color="#545454" />
            Student
            <input
              type="checkbox"
              onClick={() => {
                setIsStudent(true);
                setUserType("student");
              }}
              checked={isStudent}
            />
            <span class="checkmark"></span>
          </label>
          {/* <label                                   //check
            class="checkbox-container"
            style={{ borderColor: !isStudent ? "#6C63FF" : "#eee" }}
          >
            <Briefcase size={22} style={{ marginRight: 15 }} color="#545454" />
            Teacher
            <input
              type="checkbox"
              onClick={() => {
                setIsStudent(false);
                setUserType("teacher");
              }}
              checked={!isStudent}
            />
            <span class="checkmark"></span>
          </label> */}
        </div>
        </div>
        <p
        style={{
          fontFamily: "Poppins",
          fontSize: 16,
          color: "#545454",
          fontWeight: 600,
          margin: 0,
          textAlign: "left",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        Personal Information
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent:"center",
          alignItems: "center",
        }}
      >
          <input placeholder="First Name" style={{ width:"15vw",height:"5vh",marginRight:"10px" }} onChange={onChangefName} />
          <input placeholder="Last Name" style={{ width:"15vw",height:"5vh",marginLeft:"10px" }} onChange={onChangelName} />
      </div>
      {isStudent ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{display: "flex", flexDirection: "column",marginLeft:"90px" }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#545454",
                fontWeight: 600,
                margin: 0,
                textAlign: "left",
                marginBottom: "0.5rem",
              }}
            >
              Select your year
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Dropdown
                options={yearOptions}
                style={{width:"300px"}}
                onChange={(option) => setStudentClass(option.value)}
                value={yearOptions[0].value}
                placeholder="Select an option"
                // className="dropdown"
              />
            </div>
          </div>
          <div
            style={{display: "flex", flexDirection: "column",marginLeft:"50px" }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#545454",
                fontWeight: 600,
                margin: 0,
                textAlign: "left",
                marginBottom: "0.5rem",
              }}
            >
              Select your Department
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Dropdown
                options={departmentOptions}
                onChange={(option) => setStudentDepartment(option.value)}
                value={departmentOptions[0].value}
                placeholder="Select an option"
                className="dropdown"
              />
            </div>
          </div>
        </div>
      ) : null}

        <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"center",
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
          Email and Password
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent:"center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <div
          style={{ alignItems: "flex-start", display: "flex" }}
        >
          <input
            type="email"
            placeholder="Email ID"
            onChange={onChangeEmail}
            style={{ width:"15vw",height:"5vh",borderRadius:"3px" ,marginRight:"10px" }}
            onBlur={() =>
              validateEmail() ? null || true : toast.error("Invalid Email ID")
            }
          />
        </div>
        <div>
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              width: "100%",
            }}
          >
            <input
              type={viewPassword ? "password" : "text"}
              placeholder="Password (Min length 5)"
              onChange={onChangePassword}
              style={{ width:"15vw",height:"5vh",borderRadius:"3px",marginLeft:"10px" }}
              onBlur={() =>
                validatePassword()
                  ? null
                  : toast.error("Password should have 5 or more characters")
              }
            />
            {viewPassword ? (
              <Eye
                size={22}
                color="#ababab"
                style={{
                  marginLeft:"20px",
                  zIndex: 12,
                  marginTop: 10,
                  cursor: "pointer",
                }}
                onClick={() => setViewPassword(!viewPassword)}
              />
            ) : (
              <EyeOff
                size={22}
                color="#ababab"
                style={{
                  marginLeft:"20px",
                  zIndex: 12,
                  marginTop: 10,
                  cursor: "pointer",
                }}
                onClick={() => setViewPassword(!viewPassword)}
              />
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 40,
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          marginRight: 10,
        }}
      >
        <button
          // onClick={userType === "student" ? registerStudent : registerTeacher}       /* check */
          onClick={registerStudent}         /* updated check */
          className="btn btn-new"
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "white",
              // backgroundColor: "#6C63FF",
              margin: 0,
              fontFamily: "Poppins",
              letterSpacing: 0.4,
            }}
          >
            Register
          </p>
        </button>
      </div>
     </div>
      <br />
      </div>
    </React.Fragment>
  );
};

export default RegistrationDetails;
