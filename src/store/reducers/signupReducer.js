const initState = {
    authError: null
};

const signupReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('Sign Up Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Sign Up Error');
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

export default signupReducer;