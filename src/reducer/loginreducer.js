import {
  ACTIONS_LOGIN_REQ,
  ACTIONS_LOGIN_SUCCESS,
  ACTIONS_LOGIN_FAIL,
  ACTIONS_REGIS_REQ,
  ACTIONS_REGIS_SUCCESS,
  ACTIONS_REGIS_FAIL,
} from "../constant/loginconstant";

function loginreducer(state = {}, action) {
  switch (action.type) {
    case ACTIONS_LOGIN_REQ:
      return { loading: true };
    case ACTIONS_LOGIN_SUCCESS:
      return { loading: false, loginInfo: action.payload };
    case ACTIONS_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function register(state = {}, action) {
  switch (action.type) {
    case ACTIONS_REGIS_REQ:
      return { loading: true };
    case ACTIONS_REGIS_SUCCESS:
      return { loading: false, datauser: action.payload };
    case ACTIONS_REGIS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { loginreducer, register };
