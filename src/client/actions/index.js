export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/users')
    .then((response) => dispatch({
      type: FETCH_USERS,
      payload: response.data,  
    }))
    .catch((err) => {
      console.log(err.message);
    });
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const fetchCurrentUser = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/current_user')
    .then((response) => dispatch({
      type: FETCH_CURRENT_USER,
      payload: response.data,
    }))
    .catch((err) => {
      console.log(err.message);
    });
}

export const FETCH_ADMINS = 'FETCH_ADMINS';
export const fetchAdmins = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/admins')
    .then((response) => dispatch({
      type: FETCH_ADMINS,
      payload: response.data,
    }))
    .catch((err) => {
      console.log(err.message);
    })
}