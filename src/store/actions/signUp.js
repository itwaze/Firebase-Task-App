import { logoutAction } from "./logoutAction";

export const signUpAction = (userData) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.pass
        ).then((res) => {
                return firestore.collection('users').doc(res.user.uid).set({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    initials: userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase()
                }).then(() => dispatch({type: 'SIGNUP_SUCCESS'}))
            }).catch(err => dispatch({type: 'SIGNUP_ERROR', err}))
    }
};