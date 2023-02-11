import React, { Component } from "react";
import { Control } from "react-redux-form";
import { Form } from "react-router-dom";
import { Label, FormGroup } from "reactstrap";
import { LocalForm } from "react-redux-form";

export class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
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
            <LocalForm
              className="needs-validation"
              noValidate
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <div>
                <div>
                  <label htmlFor="firstname" className="form-label">First name</label>
                  <Control.text
                    model=".firstname"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="my-3">
                  <label htmlFor="validationTooltip02">Last name</label>
                  <Control.text
                    model=".lastname"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    required
                  />
                  <div className="valid-tooltip">Looks good!</div>
                </div>
                <div className="my-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="my-3">
                  <Label htmlFor="telnum">Telephone</Label>
                  <Control.text
                    model=".telnum"
                    className="form-control"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. number"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <Label htmlFor="message">Your Feedback</Label>
                  <Control.textarea
                    className="form-control"
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    required
                  ></Control.textarea>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </LocalForm>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
