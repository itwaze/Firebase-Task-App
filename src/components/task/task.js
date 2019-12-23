import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskAction } from '../../store/actions/taskAction';
import {  firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from 'moment';
import './task.css';

class Task extends Component {

    state = {
        title: '',
        desc: '',
        date: new Date().toLocaleString()
    };

    handleOnChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.taskAction(this.state)
        this.setState({
            title: '',
            desc: ''
        })
    };

    render() {
        const { task } = this.props;

        return (
            <form onSubmit={this.handleOnSubmit} >
                <input id='title' type="text" value={this.state.title} placeholder='Title' onChange={this.handleOnChange}/>
                <input id='desc' type="text" value={this.state.desc} placeholder='Description' onChange={this.handleOnChange}/>
                <button>Submit</button>
                        {
                            task !== undefined ?
                                task.map((el, i) => {
                                    return (
                                        <div key={i}>
                                            <p><strong>Title: </strong>{el.title}</p>
                                            <p><strong>Description: </strong>{el.desc}</p>
                                            <p><strong>Date: </strong>{moment(el.date).fromNow()}</p>
                                        </div>
                                    )
                                }) :
                                null
                        }
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        task: state.firestore.ordered.task,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskAction: (data) => dispatch(taskAction(data))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'task', orderBy: ['date', 'desc'] },
        { collection: 'notifications' }
    ])
)(Task);