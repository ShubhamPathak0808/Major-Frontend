import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import "./Navbar.css";
import "./main.css";
class Extra extends React.Component {
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
    alert("File Added Successfully");
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
  addBook() {
    this.toggleModel();
    alert(this.state)
    var data = {
      name: this.state.name,
      author: this.state.author,
      pub_year: this.state.pub_year,
      copies: this.state.copies,
      times_issued: 0,
    };
    if (
      data.name != "" &&
      data.author != "" &&
      data.pub_year != "" &&
      data.copies != ""
    ) {
      axios.post("http://localhost:8000/addbook", data).then((error, res) => {
        this.getArticles();
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
  componentDidMount() {
    this.getTopIssued();
    this.getArticles();
  }
  render() {
    const em = localStorage.getItem("email");
    return (
      <div>
        {this.state.open ? (
          <Modal
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
              content: {
                position: "absolute",
                top: "40px",
                marginRight: "auto",
                marginLeft: "auto",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
                width: "30vw",
                height: "auto",
              },
            }}
            isOpen={this.state.open}
            onRequestClose={() => this.toggleModel()}
            // https://source.unsplash.com/1600x900/?book
            contentLabel="My dialog"
          >
            <h1 style={{ textAlign: "center" }}>Add Book</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1.5vw",
                  marginTop: "2px",
                }}
              >
                <label for="name">Name</label>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      border: 0,
                      height: "3vw",
                      marginTop: 2,
                      backgroundColor: "#f5f5f0",
                      fontSize: "1.5vw",
                    }}
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.nameChange}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1.5vw",
                  marginTop: "2px",
                }}
              >
                <label for="author">Author</label>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      border: 0,
                      height: "3vw",
                      marginTop: 2,
                      backgroundColor: "#f5f5f0",
                      fontSize: "1.5vw",
                    }}
                    type="text"
                    id="author"
                    name="author"
                    onChange={this.authorChange}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1.5vw",
                  marginTop: "2px",
                }}
              >
                <label for="pub_year">Publication Year</label>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      border: 0,
                      height: "3vw",
                      marginTop: 2,
                      backgroundColor: "#f5f5f0",
                      fontSize: "1.5vw",
                    }}
                    type="number"
                    id="pub_year"
                    name="pub_year"
                    onChange={this.yearChange}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1.5vw",
                  marginTop: "2px",
                }}
              >
                <label for="copies">No. of Copies</label>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      border: 0,
                      height: "3vw",
                      marginTop: 2,
                      backgroundColor: "#f5f5f0",
                      fontSize: "1.5vw",
                    }}
                    type="number"
                    id="copies"
                    name="copies"
                    onChange={this.copyChange}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1.5vw",
                  marginTop: "2px",
                }}
              >
                <label for="copies">Upload file</label>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      border: 0,
                      height: "3vw",
                      marginTop: 2,
                      backgroundColor: "#f5f5f0",
                      fontSize: "1.5vw",
                    }}
                    type="file"
                    id="file"
                    name="file"
                    onChange={this.fileChange}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Add"
                onClick={(e) => this.addBook(e)}
                style={{
                  backgroundColor: "#D8EF04",
                  marginTop: 8,
                  border: 0,
                  borderRadius: 4,
                  width: "6vw",
                  height: "3vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontSize: "1.3vw",
                  marginTop: "10vh",
                }}
              />
            </div>
          </Modal>
        ) : (
          <div></div>
        )}
        <div>
          <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
            Welcome to E-library Admin Panel
          </h1>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }} class="flex">
          {this.state.books.map((books) => {
            const { id, name, author, pub_year, copies } = books;
            return (
              <div style={{ margin: "15px" }} key={id} class="card">
                <p class="name">{name}</p>
                <p class="author">By- {author}</p>
                <p class="year">{pub_year}</p>
                <div class="des">
                  <div class="copy" onClick={() => this.addCopy(id)}>
                    Add a copy
                  </div>
                  <div class="copies">No. of copies - {copies}</div>
                </div>
              </div>
            );
          })}
        </div>
        <h3
          style={{ marginTop: "20px", marginBottom: "20px", cursor: "pointer" }}
          onClick={() => this.toggleModel()}
        >
          Add New Books
        </h3>
      </div>
    );
  }
}
export default withRouter(Extra);
