import * as actionsTypes from "../actions/actionTypes";

const initialState = {
  presentations: []
};

const reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case actionsTypes.GET_ALL_PRESENTATIONS:
      return { presentations: action.payload.data };

    case actionsTypes.ADD_PRESENTATION:
      return { presentations: [...state.presentations, action.payload.data] };

    case actionsTypes.EDIT_PRESENTATION:
      let newStateData = state.presentations.map(presentation =>
        presentation._id === action.payload.data._id
          ? action.payload.data
          : presentation
      );
      return { presentations: newStateData };

    case actionsTypes.DELETE_PRESENTATION:
      newStateData = state.presentations.filter(
        presentation => presentation._id !== action.payload.data._id
      );
      return { presentations: newStateData };

    default:
      return state;
  }
};

export default reducer;
