// Action types.

// The type of actions that sets the app state.
const SET_APP_STATE = 'SET_APP_STATE';

// The type of actions that resets the app state.
const RESET_APP_STATE = 'RESET_APP_STATE';

// Action creators.

// Creates an action for setting the app state.
const setAppState = () => {
  return {
    type: SET_APP_STATE,
  };
};

// Creates an action for setting the app state.
const resetAppState = () => {
  return {
    type: RESET_APP_STATE,
  };
};

// State.

// Creates the initial state.
const initialState = {
  isLoaded: undefined,
};

// Reducer.

// Applies the given action to the given state.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      return { ...state, isLoaded: true };
    case RESET_APP_STATE:
      return { ...state, isLoaded: false };
    default:
      return state;
  }
};

// Grouped actions.
const actions = {
  setAppState,
  resetAppState,
};

export {
  actions,
  reducer,
};
