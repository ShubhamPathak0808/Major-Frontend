import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import userImage4 from "../../assets/user.svg";
import {EmptyStateSmall} from "../EmptyState";
import CourseCard from "../CourseCard";
import "../css/Course.css";

let localdata = JSON.parse(localStorage.getItem("userDetails"));
let userType = JSON.parse(localStorage.getItem("userType"));
let theme = JSON.parse(localStorage.getItem("theme"));

let user = localdata
  ? localdata
  : {
      fName: "",
      lName: "",
      email: "",
      _id: "404",
    };
let { _id, year, department } = user;

const Hodhome = () => {
    const [userInfo, setUserInfo] = React.useState(null);

    // Second Year
    const [courses2, setCourses2] = React.useState([]);
    const [courseTeachers2, setCourseTeachers2] = React.useState([]);
    const [studentCount2, setStudentCount2] = React.useState([]);

    // Third Year
    const [courses3, setCourses3] = React.useState([]);
    const [courseTeachers3, setCourseTeachers3] = React.useState([]);
    const [studentCount3, setStudentCount3] = React.useState([]);

    // Fourth Year
    const [courses4, setCourses4] = React.useState([]);
    const [courseTeachers4, setCourseTeachers4] = React.useState([]);
    const [studentCount4, setStudentCount4] = React.useState([]);

    React.useEffect(() => {
        Axios.get(`http://localhost:8000/api/${userType}/${_id}`, {
        header: {
            "Content-Type": "application/json; charset=utf-8",
        },
        })
        .then((res) => {
            if (res.data.success) {
            setUserInfo(res.data.data);
            } else {
                // TODO:
            }
        })
        .catch((error) => {
            console.log(error);
        });

        // Get Second year courses
        Axios.get(`http://localhost:8000/api/fetchCourse/First%20Year`, {
            header: {
            "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then((res) => {
            if (res.data.success) {
                setCourses2(res.data.data);
            } else {
                // TODO
            }
            })
        .catch((error) => {});

        // Get Third year courses
        Axios.get(`http://localhost:8000/api/fetchCourse/Third%20Year`, {
            header: {
            "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then((res) => {
            if (res.data.success) {
                setCourses3(res.data.data);
            } else {
                // TODO
            }
            })
        .catch((error) => {});

        // Get Fourth year courses
        Axios.get(`http://localhost:8000/api/fetchCourse/Fourth%20Year`, {
            header: {
            "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then((res) => {
            if (res.data.success) {
                setCourses4(res.data.data);
            } else {
                // TODO
            }
            })
        .catch((error) => {});
    }, []);


  const getTeachers2 = () => {
    let courseArray = [...courseTeachers2];
    courses2.map((course, index) => {
      Axios.get(`http://localhost:8000/api/teacher/${course.teacher_id}`, {
        header: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          courseArray[index] = res.data.data.fName
            .concat(" ")
            .concat(res.data.data.lName);
          setCourseTeachers2(courseArray);
        })
        .catch(() => toast.error("Error"));
    });
  };

  const getStudentCount2 = () => {
    let courseArray = [...studentCount2];
    courses2.map((course, index) => {
      Axios.get(`http://localhost:8000/api/studentCount/${course._id}`, {
        header: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          courseArray[index] = res.data.data.count;
          setStudentCount2(courseArray);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error");
        });
    });
  };

  const getTeachers3 = () => {
    let courseArray = [...courseTeachers3];
    courses3.map((course, index) => {
      Axios.get(`http://localhost:8000/api/teacher/${course.teacher_id}`, {
        header: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          courseArray[index] = res.data.data.fName
            .concat(" ")
            .concat(res.data.data.lName);
          setCourseTeachers3(courseArray);
        })
        .catch(() => toast.error("Error"));
    });
  };

  const getStudentCount3 = () => {
    let courseArray = [...studentCount3];
    courses3.map((course, index) => {
      Axios.get(`http://localhost:8000/api/studentCount/${course._id}`, {
        header: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          courseArray[index] = res.data.data.count;
          setStudentCount3(courseArray);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error");
        });
    });
  };

  const getTeachers4 = () => {
    let courseArray = [...courseTeachers4];
    courses4.map((course, index) => {
      Axios.get(`http://localhost:8000/api/teacher/${course.teacher_id}`, {
        header: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          courseArray[index] = res.data.data.fName
            .concat(" ")
            .concat(res.data.data.lName);
          setCourseTeachers4(courseArray);
        })
        .catch(() => toast.error("Error"));
    });
  };

  const getStudentCount4 = () => {
    let courseArray = [...studentCount4];
    courses4.map((course, index) => {
      Axios.get(`http://localhost:8000/api/studentCount/${course._id}`, {
        header: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          courseArray[index] = res.data.data.count;
          setStudentCount4(courseArray);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error");
        });
    });
  };

  React.useEffect(() => {
    getStudentCount2();
    getTeachers2();
  }, [courses2]);

  React.useEffect(() => {
    getStudentCount3();
    getTeachers3();
  }, [courses3]);

  React.useEffect(() => {
    getStudentCount4();
    getTeachers4();
  }, [courses4]);

    return (
        <div className="course-container">
          <div
            style={{
              width: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginLeft: 15,
            }}
          >
            <div
              className="changeColorBG"
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "5rem",
                backgroundColor: "#eeeeee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={userImage4}
                style={{ width: "4.5rem", marginTop: 10 }}
                className="changeColorBG"
              />
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <h2
                className="changeColor"
                style={{
                  textAlign: "left",
                  fontFamily: "Poppins",
                  color: theme === "dark" ? "#eee" : "#232323",
                  fontWeight: 600,
                  fontSize: 28,
                }}
              >
                {userInfo ? userInfo.fName : null}{" "}
                {userInfo ? userInfo.lName : null}
              </h2>
              <p
                className="sub"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 17,
                  color: "#545454",
                  fontWeight: 600,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {userType.toUpperCase()}
              </p>
              <p
                className="sub"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "#545454",
                  fontWeight: 500,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {year} {department}
              </p>
            </div>
          </div>
        <p
        className="sub"
        style={{
        fontSize: 18,
        letterSpacing: 0.4,
        color: "#545454",
        fontFamily: "Poppins",
        fontWeight: 600,
        margin: 0,
        padding: 0,
        marginTop: 35,
        marginBottom: 5,
        marginLeft: 20,
        display: "block"
        }}
        >
        IInd Year Courses
        </p>
        <div className="my-courses-box" style={{ paddingLeft: 5 }}>
        {courses2
        ? courses2.map((course, index) => {
            return (
                <CourseCard
                userInfo={userInfo}
                userType={userType}
                courseID={course._id}
                key={index}
                courseTitle={course.name}
                year={course.year}
                dept={course.department}
                teacher={courseTeachers2[index]}
                numberOfStudents={studentCount2[index]}
                />
            );
            })
        : null}

        {courses2.length ? null : <EmptyStateSmall title="No courses" d1="No courses for Second Year"/>}
        </div>
        <p
        className="sub"
        style={{
        fontSize: 18,
        letterSpacing: 0.4,
        color: "#545454",
        fontFamily: "Poppins",
        fontWeight: 600,
        margin: 0,
        padding: 0,
        marginTop: 35,
        marginBottom: 5,
        marginLeft: 20,
        display: "block"
        }}
        >
        IIIrd Year Courses
        </p>
        <div className="my-courses-box" style={{ paddingLeft: 5 }}>
        {courses3
        ? courses3.map((course, index) => {
            return (
                <CourseCard
                userInfo={userInfo}
                userType={userType}
                courseID={course._id}
                key={index}
                courseTitle={course.name}
                year={course.year}
                dept={course.department}
                teacher={courseTeachers3[index]}
                numberOfStudents={studentCount3[index]}
                />
            );
            })
        : null}

        {courses3.length ? null : <EmptyStateSmall title="No courses" d1="No courses for Third Year"/>}
        </div>
        <p
        className="sub"
        style={{
        fontSize: 18,
        letterSpacing: 0.4,
        color: "#545454",
        fontFamily: "Poppins",
        fontWeight: 600,
        margin: 0,
        padding: 0,
        marginTop: 35,
        marginBottom: 5,
        marginLeft: 20,
        display: "block"
        }}
        >
        IVth Year Courses
        </p>
        <div className="my-courses-box" style={{ paddingLeft: 5 }}>
        {courses4
        ? courses4.map((course, index) => {
            return (
                <CourseCard
                userInfo={userInfo}
                userType={userType}
                courseID={course._id}
                key={index}
                courseTitle={course.name}
                year={course.year}
                dept={course.department}
                teacher={courseTeachers4[index]}
                numberOfStudents={studentCount4[index]}
                />
            );
            })
        : null}
        {courses4.length ? null : <EmptyStateSmall title="No courses" d1="No courses for Fourth Year"/>}
        </div>
    </div>
    );
}

export default Hodhome