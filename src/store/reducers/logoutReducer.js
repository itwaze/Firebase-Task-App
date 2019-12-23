const initState = {};

const logoutReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGOUT_SUCCESS':
            console.log('Logout success');
            return state
        default:
            return state;
    }
};

export default logoutReducer;