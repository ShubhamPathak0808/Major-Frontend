import React from "react";
import { withRouter } from "react-router-dom";


import axios from "axios";
import Modal from "react-modal";
import "./Navbar.css";
import "./main.css";
import "./components/css/Course.css";
// import { Book, Copy, X, Plus } from "react-feather";
import {
  FileText,
  Plus,
} from "react-feather";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { customStyles3 } from "./components/CustomModalStyles";
const baseURL = "http://localhost:8000/";

class Admin extends React.Component {
  
  constructor(props) {
   
    super(props);
    
    this.state = {
      
      books: [],
      searchfield: "",
      open: false,
      name: "",
      pub_year: "",
      author: "",
      copies: 1,
      top_issued: [],
      image:"",
      file:"",
      id:"",
      fileName:""
    };
    
    this.logout = this.logout.bind(this);
    this.addBook = this.addBook.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.copyChange = this.copyChange.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.toggleModel = this.toggleModel.bind(this);
    this.addCopy = this.addCopy.bind(this);
    this.download = this.download.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }
  toggleModel() {
    this.setState({ open: !this.state.open });
  }
  nameChange(e) {
    this.setState({ name: e.target.value });
  }
  copyChange(e) {
    this.setState({ copies: e.target.value });
  }
  fileChange(e) {
    // alert("File Added Successfully");
    // alert(e.target.files[0]);
   this.setState({file:e.target.files[0]})
   this.setState({fileName:e.target.files[0].name})
    // this.setState({file:e.target.files[0]})

    // this.toggleModel();
  }
  yearChange(e) {
    this.setState({ pub_year: e.target.value });
  }
  authorChange(e) {
    this.setState({ author: e.target.value });
  }
  addCopy(id) {
    fetch(`http://localhost:8000/addcopies/${id}`).then((error, res) => {
      this.getArticles();
    });
  }
  download(id){
    fetch(`http://localhost:8000/download/${id}`).then((error, res) => {
      this.getArticles();
    });
  }
  addBook() {
    this.toggleModel();
   
    // alert(this.state);
    var materialData = {
      name: this.state.name,
      author: this.state.author,
      pub_year: this.state.pub_year,
      copies: this.state.copies,

      times_issued: 0,
      // file:this.state.file
      // file:this.state.file
    };
    if (
      materialData.name !=="" &&
      materialData.author !=="" &&
      materialData.pub_year !=="" &&
      materialData.copies !==""
    ) {
      axios.post("http://localhost:8000/addbook", materialData).then((res) => {
       
        // this.getArticles();
        
       
        // alert(res.data.data);
        // console.log(res.data.data._id)
        // formData.file=this.state.file;
        // formData.save();
        // .then((res)=>{
          var formData = new FormData();
          // alert(this.state.file);
          formData.append("file",this.state.file)
          axios.post(
            `http://localhost:8000/addBook/attachment/${res.data._id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data;",
              },
            }
          )
          .then((res1) => {
          // alert("This is called");
          })
          .catch((err) => {
            
          //  alert("What's the problem man");
          });
        // })
       
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Error creating new material");
        // setIsOpen(false);
      });
      
    }
    
  }
  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    this.props.history.push("/signup");
  }
  getArticles() {
    fetch("https://major-backend.onrender.com")
      .then((response) => response.json())
      .then((response) =>
        response.map((article) => ({
          id: `${article._id}`,
          name: `${article.name}`,
          author: `${article.author}`,
          pub_year: `${article.pub_year}`,
          times_issued: `${article.times_issued}`,
          copies: `${article.copies}`,
          image:`${article.image}`,
          
        }))
      )
      .then((articles) => {
        this.setState({
          books: articles,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  getTopIssued() {
    fetch("http://localhost:8000/topissued")
      .then((response) => response.json())
      .then((res) =>
        res.data.map((article) => ({
          id: `${article._id}`,
          name: `${article.name}`,
          author: `${article.author}`,
          pub_year: `${article.pub_year}`,
          times_issued: `${article.times_issued}`,
          copies: `${article.copies}`,
          image:`${article.image}`
        }))
      )
      .then((articles) => {
        this.setState({
          top_issued: articles,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  componentDidMount() {
    this.getTopIssued();
    this.getArticles();
  }
  render() {
    return (
      <div >
        {this.state.open ? (
          <Modal
          style={customStyles3}
          closeTimeoutMS={200}
          className="background"
            isOpen={this.state.open}
            onRequestClose={() => this.toggleModel()}
            contentLabel="My dialog"
          >
            <div
            style={{
              width: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              className="changeColorBG"
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "5rem",
                backgroundColor: "#eeeeee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <FileText size={25} color="#6C63FF" />
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <h2
                className="changeColor"
                style={{
                  textAlign: "left",
                  fontFamily: "Poppins",
                  color: "#232323",
                  fontWeight: 600,
                  fontSize: 22,
                  padding: 0,
                  marginBottom: 0,
                }}
              >
                Add Book
              </h2>
              <p
                className="grey"
                style={{
                  fontFamily: "Mulish",
                  fontSize: 16,
                  color: "#878787",
                  fontWeight: 600,
                  margin: 0,
                  padding: 0,
                  marginTop: 5,
                }}
              >
                Add a new book to the E-Library
              </p>
            </div>
          </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
            >
               <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  marginRight: 25,
                }}
              >
                <p
                  className="changeColor"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 16,
                    color: "#232323",
                    fontWeight: 600,
                    margin: 0,
                    padding: 0,
                    textAlign: "left",
                    marginTop: 20,
                    marginBottom: 0,
                  }}
                >
                  Name
                </p>
                <input
                    className="changeColorBG changeColor"
                    type="text"
                    style={{ height: 40, width: "100%" }}
                    name="name"
                    id="name"
                    onChange={this.nameChange}
                  />
               
                  
                </div>
              </div>
              <React.Fragment>
              <p
                className="changeColor"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "#232323",
                  fontWeight: 600,
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                Author
              </p>
              <input
                type="text"
                style={{ height: 40 }}
                id="author"
                name="author"
                onChange={this.authorChange}
                className="changeColorBG changeColor"
                
              ></input>
            </React.Fragment>    
            <React.Fragment>
              <p
                className="changeColor"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "#232323",
                  fontWeight: 600,
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                Publication Year
              </p>
              <input
                type="text"
                id="pub_year"
                style={{ height: 40 }}
                name="pub_year"
                onChange={this.yearChange}
                className="changeColorBG changeColor"
              ></input>
            </React.Fragment>  
            <React.Fragment>
              <p
                className="changeColor"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "#232323",
                  fontWeight: 600,
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                No. of Copies
              </p>
              <input
                type="text"
                id="copies"
                name="copies"
                style={{ height: 40 }}
                onChange={this.copyChange}
                className="changeColorBG changeColor"
              ></input>
            </React.Fragment>    
             
            <p
            className="changeColor"
            style={{
              fontFamily: "Poppins",
              fontSize: 16,
              color: "#232323",
              fontWeight: 600,
              margin: 0,
              padding: 0,
              textAlign: "left",
              marginTop: 35,
              marginBottom: 0,
             
            }}
          >
            Add attachment{" "}
            <span className="changeColor" style={{ fontSize: 14, fontWeight: 400, color: "#232323" }}>
              (Supported Type : PDF, Max Size : 10 MB)
            </span>
          </p>
          <button
              className="changeColorBG height"
              style={{
                backgroundColor: "transparent",
                border: "0px solid #eee",
                boxShadow: "none",
                padding: "5px 10px",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                overflow: "hidden",
                height: 40,
              }}
            >
              <input
                type="file"
                id="file"
                name="file"
                onChange={this.fileChange}
                className="file-upload"
              />
              <Plus
                size={18}
                className="changeColor"
                style={{ marginRight: 10 }}
              />
              <p
                className="changeColor"
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#6C63FF",
                  margin: 0,
                  fontFamily: "Mulish",
                }}
              >
                Upload file
              </p>
              
            </button>
            <div className="">
                {this.state.fileName}
            </div>
            <div
            style={{
              position:"absolute",
              // bottom: 10,
              right: 40,
              bottom:40,

              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <button
             onClick={(e) => this.addBook(e)}
              className ="btn btn-new"
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "white",
                  margin: 0,
                  fontFamily: "Poppins",
                  letterSpacing: 0.8,
                }}
                // onClick={postMaterial}
              >
                Create
              </p>
            </button> 
            </div>
            
          
            {/* </div> */}
           
          </Modal>
        ) : (
          <div></div>
        )}
        <div className="course-container cc">
        <div>
          <h1 style={{ marginTop: "20px", marginBottom: "20px" }} className="changeColor text-center">
            Welcome to E-library Admin Panel
          </h1>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }} class="flex">
          {this.state.books.map((books) => {
            const { id, name, author, pub_year, copies ,image} = books;
            return (
              // <div style={{ margin: "15px" }} key={id} class="card">
              //   <p class="name">{name}</p>
              //   <p class="author">By- {author}</p>
              //   <p class="year">{pub_year}</p>
              //   <div class="des">
              //     <div class="copy" onClick={() => this.addCopy(id)}>
              //       Add a copy
              //     </div>
              //     <div class="copies">No. of copies - {copies}</div>
              //   </div>
              // </div>
              <div style={{ margin: "15px" }} key={id}>
                    <Card
                      style={{
                        width: "18rem",
                      }}
                      className="changeColorBG"
                    >
                      <img 
                        alt="Sample"
                        src={baseURL + image}
                        className="newh "
                      />
                      <CardBody>
                        <CardTitle tag="h5" className="changeColor">
                          {name}
                        </CardTitle>
                        <CardSubtitle className="mb-2 changeColor" tag="h6">
                          By: {author}
                        </CardSubtitle>
                        <CardSubtitle className="text-muted mb-2" tag="h6">
                          {pub_year}
                        </CardSubtitle>
                        <CardText className="changeColor">
                          Number of Copies : {copies}
                        </CardText>
                        <Button
                          className=" btn btn-new mt-4"
                          onClick={() => this.addCopy(id)}
                        >
                          Add a copy
                        </Button>
                        <Button
                          className=" btn btn-new mt-4 btn-right"
                          href={`http://localhost:8000/download/${id}`}
                          target="_blank"
                          // href = "https://www.google.com/"
                        >
                          PDF
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
            );
          })}
        </div>
        {/* <h3
          style={{ marginTop: "20px", marginBottom: "20px", cursor: "pointer" }}
          onClick={() => this.toggleModel()}
          className="changeColor"
        >
          <Plus size={30} color="white" />
          Add New Books
        </h3> */}
       <h1 style={{
        display:"flex",
        alignItems:"flex-end",
       }}>
       <Button style={{
            display: "flex",
            flexDirection: "row",
            width: "auto",
            height: "50px",
            alignItems: "center",
            // position:"absolute",
            // left:"25"

          }} className="btn btn-new " size={30} onClick={() => this.toggleModel()}>

        <Plus size={30} color="white" />
        <p
            style={{
              fontFamily: "Poppins",
              color: "white",
              fontWeight: 600,
              letterSpacing: 0.6,
              fontSize: 20,
              margin: 0,
              padding: 0,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            {/* {userType === "teacher" ? "Create" : "Join"} */}
            Add New Book
          </p>
        </Button>
       </h1>
      
      </div>
      </div> 
    );
  }
}
export default withRouter(Admin);
