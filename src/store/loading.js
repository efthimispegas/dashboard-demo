// Action types.

// The type of actions that sets the loading state.
const SET_ACTION_LOADING = 'SET_ACTION_LOADING';

// The type of actions that resets the loading state.
const RESET_ACTION_LOADING = 'RESET_ACTION_LOADING';

// Action creators.

// Creates an action to set a user's keys (action resolved successfully).
const setLoading = () => {
  return {
    type: SET_ACTION_LOADING,
  };
};

const resetLoading = () => {
  return {
    type: RESET_ACTION_LOADING,
  };
};

// State.

// Creates the initial state.
const initialState = {
  loading: false,
};

// Reducer.

// Applies the given action to the given state.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTION_LOADING:
      return { ...state, loading: true };
    case RESET_ACTION_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

// Grouped actions.
const actions = {
  setLoading,
  resetLoading,
};

export {
  actions,
  reducer,
};
