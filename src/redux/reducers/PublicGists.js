import Immutable from "seamless-immutable";
import * as types from "../actions/ActionTypes";

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: "",
  data: {},
});

const publicGists = (state = initialState, action) => {
  switch (action.type) {
    case types.PUBLIC_GISTS.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.PUBLIC_GISTS.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: "",
        data: action.data,
      });
    case types.PUBLIC_GISTS.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    default:
      return state;
  }
};

export default publicGists;
