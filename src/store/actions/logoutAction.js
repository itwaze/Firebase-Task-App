export const logoutAction = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => dispatch({ type: 'LOGOUT_SUCCESS' }))
    }
};