import React, { Component } from "react";
import "./styles.scss";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const value = event.target.value.toString();
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  enableSubmit = () => {
    if (this.state.email !== "" && this.state.password.length > 8) {
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
      <div className="login">
        <h3 className="login__title">Log In</h3>
        <form onSubmit={this.handleSubmit} className="login__form">
          <div className="login__form__row">
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

export default LogIn;
