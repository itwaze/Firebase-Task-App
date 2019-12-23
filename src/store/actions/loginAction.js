export const loginAction = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(creds.email, creds.pass)
            .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
            .catch((err) => dispatch({ type: 'LOGIN_ERROR', err }))
    }
};