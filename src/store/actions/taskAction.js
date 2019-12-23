export const taskAction = (task) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('task').add({
      ...task
    }).then(() => {
      dispatch({ type: 'CREATE_TASK_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_TASK_ERROR' }, err);
    });
  }
};