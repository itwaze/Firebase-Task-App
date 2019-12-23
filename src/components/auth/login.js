import React, { Component } from 'react';
import { loginAction } from "../../store/actions/loginAction";
import { connect } from 'react-redux';

class Login extends Component {

    state = {
        email: '',
        pass: ''
    };

    handleOnChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.loginAction(this.state);

        this.setState({
            email: '',
            pass: ''
        })
    };

    render() {

        const { authError } = this.props;

        return (
            <form onSubmit={this.handleOnSubmit}>
                <input onChange={this.handleOnChange} id='email' type="text" placeholder='Login'/>
                <input onChange={this.handleOnChange} id='pass' type="password" placeholder='Password'/>
                <button>Login</button>
                { authError ? <span>{authError}</span> : null }
            </form>
        )
    }
}

const mapStateToProps = ({ login }) => {
    return {
        authError: login.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (creds) => dispatch(loginAction(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);