import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/ContactUs";
import DishdetailComponent from "./components/DishdetailComponent";
import About from "./components/AboutUs";
import { connect } from "react-redux";

// Maps state of redux to this components props
function mapStateToProps(state){
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav
            className="navbar navbar-expand-lg body-tertiary"
            style={{ backgroundColor: "#3625b3", color: "white" }}
          >
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                <img
                  src="assets/images/logo.png"
                  height="30"
                  width="41"
                  alt="Ristorante Con Fusion"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active" active>
                    <Link
                      className="nav-link active text-white"
                      aria-current="page"
                      to="/home"
                    >
                      <span className="fa fa-home fa-lg"></span> Home
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/aboutus"
                    >
                      <span className="fa fa-info fa-lg"></span> About Us
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/menu"
                    >
                      <span className="fa fa-list fa-lg"></span> Menu
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/contactus"
                    >
                      <span className="fa fa-address-card fa-lg"></span> Contact
                      Us
                    </Link>
                  </li>
                </ul>
                <div className="d-flex mx-5">
                  <button
                    type="button"
                    className="btn text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </button>
                  <div
                    className="modal fade text-black"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Login
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary" onClick={()=>{alert("email: "+this.state.email+" password: "+ this.state.password)}}>
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <HeaderComponent></HeaderComponent>

          <Routes>
            <Route
              exact
              path="/home"
              j
              element={
                <Home
                  dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion={
                    this.props.promotions.filter((promo) => promo.featured)[0]
                  }
                  leader={
                    this.props.leaders.filter((leader) => leader.featured)[0]
                  }
                ></Home>
              }
            ></Route>
            <Route
              exact
              path="/menu"
              element={<Menu dishes={this.props.dishes}></Menu>}
            ></Route>
            <Route
              exact
              path="/contactus"
              element={<Contact></Contact>}
            ></Route>
            <Route
              exact
              path="/aboutus"
              element={<About leaders={this.props.leaders}></About>}
            ></Route>
          </Routes>

          <FooterComponent></FooterComponent>
        </Router>
      </div>
    );
  }
}

export default (connect(mapStateToProps)(App));