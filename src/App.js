import React from 'react';
import Task from './components/task/task'
import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from './components/auth/login';
import SignUp from "./components/auth/signUp";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App = ({ auth }) => {
    if (!auth.isLoaded) return <h1>Loading</h1>
    return (
        <Router>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    {
                        auth.isEmpty ?
                            <React.Fragment>
                                <Route path='/login' component={Login} />
                                <Route path='/signup' component={SignUp} />
                            </React.Fragment> :
                            <Route path='/create' component={Task} />
                    }
                    <Redirect to='/' />
                </Switch>
            </React.Fragment>
        </Router>
)
};

const mapStateToProps = ({ firebase }) => {
    return {
        auth: firebase.auth
    }
};

export default connect(mapStateToProps)(App);
