import React, { Component } from "react";
import { Form } from "react-router-dom";
import { Label, FormGroup } from "reactstrap";
import { Col } from "reactstrap";
import { Input } from "reactstrap";
import { Button } from "reactstrap";

export class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row row-content">
            <div className="col-12">
              <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope"></i>:{" "}
                <a href="mailto:confusion@food.net">confusion@food.net</a>
              </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
              <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
              <div className="btn-group" role="group">
                <a
                  role="button"
                  className="btn btn-primary"
                  href="tel:+85212345678"
                >
                  <i className="fa fa-phone"></i> Call
                </a>
                <a role="button" className="btn btn-info">
                  <i className="fa fa-skype"></i> Skype
                </a>
                <a
                  role="button"
                  className="btn btn-success"
                  href="mailto:confusion@food.net"
                >
                  <i className="fa fa-envelope-o"></i> Email
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-content mx-5 my-5">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <form
              className="needs-validation"
              novalidate
              onSubmit={this.handleSubmit}
            >
              <div>
                <div>
                  <label for="firstname" className="form-label">First name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="my-3">
                  <label for="validationTooltip02">Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="valid-tooltip">Looks good!</div>
                </div>
                <div className="my-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="my-3">
                  <Label htmlFor="telnum">Telephone</Label>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. number"
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <Label htmlFor="message">Your Feedback</Label>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
