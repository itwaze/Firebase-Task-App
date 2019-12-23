const initState = {};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TASK_SUCCESS':
      console.log('create task success');
      return state;
    case 'CREATE_TASK_ERROR':
      console.log('create task error');
      return state;
    default:
      return state;
  }
};

export default taskReducer;