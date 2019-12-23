import React from 'react';
import { connect } from 'react-redux';
import { logoutAction } from "../../store/actions/logoutAction";
import { Link } from "react-router-dom";
import './header.css'

const Header = ({ firebase, logoutAction }) => {
    return (
        <header>
            <Link to='/'>Home</Link>
            {
                firebase.auth.isEmpty ?
                    <React.Fragment>
                        <Link to="/login">Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </React.Fragment> :
                    <React.Fragment>
                        <Link to="/create">Create Task</Link>
                        <button className='logout' onClick={logoutAction}>Logout</button>
                        <span>{ firebase.profile.initials }</span>
                    </React.Fragment>
            }
        </header>
    )
};

const mapStateToProps = ({ firebase }) => {
    return {
        firebase: firebase
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      logoutAction: () => dispatch(logoutAction())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);