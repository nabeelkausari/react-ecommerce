import React, {Component} from 'react';

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
          </div>
          </form>
      </div>
    );
  }
}

export default SignIn;
