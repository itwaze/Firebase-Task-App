import React, { Component } from 'react';
import { signUpAction } from "../../store/actions/signUp";
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        email: '',
        pass: '',
        firstName: '',
        lastName: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUpAction(this.state)
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        const { authError } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} id='email' type="text" placeholder='Email'/>
                <input onChange={this.handleChange} id='pass' type="password" placeholder='Password'/>
                <input onChange={this.handleChange} id='firstName' type="text" placeholder='First Name'/>
                <input onChange={this.handleChange} id='lastName' type="text" placeholder='Last Name'/>
                <button>Submit</button>
                { authError ? <h1>{ authError }</h1> : null }
            </form>
        )
    }
}

const mapStateToProps = ({ signup }) => {
    return {
        authError: signup.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpAction: (userData) => dispatch(signUpAction(userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);