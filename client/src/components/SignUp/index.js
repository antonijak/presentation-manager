import React, { Component } from "react";
import "./styles.scss";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = event => {
    const value = event.target.value.toString();
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  enableSubmit = () => {
    if (
      this.state.name.length >= 2 &&
      this.state.email !== "" &&
      this.state.password.length > 8 &&
      this.state.password2 === this.state.password
    ) {
      return false;
    } else {
      //return error message/s
      return true;
    }
  };

  handleSubmit = () => {
    //check if user exists in database and if not add to db
    //else return error message
  };

  render() {
    console.log(this.enableSubmit());

    return (
      <div className="signup">
        <h3 className="signup__title">Sign Up</h3>
        <form onSubmit={this.handleSubmit} className="signup__form">
          <div className="signup__form__row">
            <div className="form-group col-md-12">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control signup__form__row__name"
                id="name"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </div>
            <div className="form-group col-md-12  signup__form__row__email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@mail.com"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </div>
            <div className="form-group col-md-12 signup__form__row__password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control "
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
            </div>

            <div className="form-group col-md-12 signup__form__row__password2">
              <label htmlFor="password2">Repeat password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                name="password2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary signup__form__submit"
            value="Submit"
            disabled={this.enableSubmit()}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
