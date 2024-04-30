import React from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";
import "./main.css";
import "./components/css/Course.css";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Row,
  CardSubtitle,
  Button,
} from "reactstrap";
// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";
const baseURL = "http://localhost:8000/";
// import Slide from "./Slide";
let localdata = JSON.parse(localStorage.getItem("userDetails"));
let userType = JSON.parse(localStorage.getItem("userType"));
let theme = JSON.parse(localStorage.getItem("theme"));
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      top_issued: [],
      search_field: "",
      search_array: [],
    };
    this.logout = this.logout.bind(this);
    this.update = this.update.bind(this);
    // this.getSearch = this.getSearch.bind(this);
    this.issue = this.issue.bind(this);
    this.getTopIssued = this.getTopIssued.bind(this);
  }

  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    this.props.history.push("/");
  }
  issue(id) {
    fetch(`http://localhost:8000/issue/${id}`).then((error, res) => {
      this.getArticles();
    });
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
          copies: `${article.copies}`,
          image: `${article.image}`,
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
  // getSearch(e){
  //   e.preventDefault();
  // //   this.setState({search_array:this.state.books.filter((book) => {
  // //     const BookName = book.name.toLowerCase();
  // //     return (BookName.includes(this.state.search_field.toLowerCase()))
  // // })})
  // }
  componentDidMount() {
    this.getArticles();
    this.getTopIssued();
  }
  update(e) {
    this.setState({ search_field: e.target.value });
    const filtered = this.state.books.filter((book) => {
      return book.name
        .toLowerCase()
        .includes(this.state.search_field.toLowerCase());
    });
    this.setState({ search_array: filtered });
  }
  render() {
    return (
      <div className="course-container cc">
        <h1
          className="changeColor"
          style={{ marginTop: "80px", textAlign: "center" }}
        >
          Welcome to E-library
        </h1>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            id="header-search"
            placeholder="Search Book"
            name="header-search"
            onChange={(e) => this.update(e)}
            // style={{ height: "30px", margin: "0px", border: "2px solid black" }}
            className="changeColor changeColorBG"
          />
          <span
            style={{
              marginLeft: "20px",
              fontSize: "30px",
              fontWeight: "bold",
              color: "brown",
              padding: "20px",
            }}
          >
            Search Book By Name
          </span>
        </div>

        <div style={{ marginTop: "20px", marginBottom: "40px" }} class="flex">
          {this.state.search_field === ""
            ? this.state.books.map((books) => {
                const { id, name, author, pub_year, copies, image } = books;
                return (
                  // <div  style={{margin:"15px"}} key={id} class="card changeColorBG">
                  //   <p class="name ">{name}</p>
                  //   <p class="author changeColor">By- {author}</p>
                  //   <p class="year changeColor">{pub_year}</p>
                  //   <img src={baseURL+image}/>
                  //   <div class="des changeColor">
                  //     <div class="copy" onClick={() => this.issue(id)}>
                  //       Issue
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
                          className=" btn btn-new"
                          onClick={() => this.issue(id)}
                        >
                          Issue
                        </Button>
                        <Button
                          className=" btn btn-new mt-4 btn-right1"
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
              })
            : this.state.search_array.map((books) => {
                const { id, name, author, pub_year, copies,image } = books;
                return (
                  // <div key={id} class="card changeColorBG">
                  //   <p class="name ">{name}</p>
                  //   <p class="author changeColor">By- {author}</p>
                  //   <p class="year changeColor">{pub_year}</p>
                  //   <div class="des changeColor">
                  //     <div
                  //       class="copy changeColor"
                  //       onClick={() => this.issue(id)}
                  //     >
                  //       Issue
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
                        className="newh"
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
                          className=" btn btn-new"
                          onClick={() => this.issue(id)}
                        >
                          Issue
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
export default withRouter(Application);
