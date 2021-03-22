// Action types.

// The type of actions that reset a user.
const RESET_USER = 'RESET_USER';

// The type of actions that sets a user.
const SET_USER = 'SET_USER';

// The type of actions that sets an error.
const SET_ERROR = 'SET_ERROR';

// The type of actions that sets user loading state.
const SET_USER_LOADING = 'SET_USER_LOADING';

// The type of actions that resets user loading state.
const RESET_USER_LOADING = 'RESET_USER_LOADING';

// Action creators.

// Creates an action to set a user's keys (action resolved successfully).
const setUser = (payload) => {
  return {
    payload,
    type: SET_USER,
  };
};

// Creates an action to set an error (action failed).
const setError = (error) => {
  return {
    error,
    type: SET_ERROR,
  };
};

// Creates an action to set loading state.
const setLoading = () => {
  return {
    type: SET_USER_LOADING,
  };
};

// Creates an action for resetting a user.
const resetUser = () => {
  return {
    type: RESET_USER,
  };
};

// Creates an action to set loading state.
const resetLoading = () => {
  return {
    type: RESET_USER_LOADING,
  };
};

// State.

// Creates the initial state.
const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
};

// Reducer.

// Applies the given action to the given state.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, data: action.payload };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case RESET_USER:
      return { ...state, user: undefined };
    case RESET_USER_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

// Grouped actions.
const actions = {
  resetUser,
  setUser,
  setLoading,
  resetLoading,
  setError,
};

export {
  actions,
  reducer,
};
