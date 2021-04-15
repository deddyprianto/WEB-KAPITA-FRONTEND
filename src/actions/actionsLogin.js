import Cookie from "js-cookie";
import instance from "../Axios";
import {
  ACTIONS_LOGIN_REQ,
  ACTIONS_LOGIN_SUCCESS,
  ACTIONS_LOGIN_FAIL,
  ACTIONS_REGIS_REQ,
  ACTIONS_REGIS_SUCCESS,
} from "../constant/loginconstant";

const actionlogin = (username, pass) => async (dispatch, getState) => {
  dispatch({ type: ACTIONS_LOGIN_REQ });
  try {
    const { data } = await instance.post("/api/backend/login", {
      username,
      pass,
    });
    dispatch({ type: ACTIONS_LOGIN_SUCCESS, payload: data });
    const {
      login: { loginInfo },
    } = getState();
    Cookie.set("loginInfo", JSON.stringify(loginInfo));
  } catch (error) {
    dispatch({
      type: ACTIONS_LOGIN_FAIL,
      payload: error.response.data.pesan,
    });
  }
};
const actionRegister = (username, email, pass) => async (dispatch) => {
  dispatch({ type: ACTIONS_REGIS_REQ });
  try {
    const { data } = await instance.post("/api/backend", {
      username,
      email,
      pass,
    });
    dispatch({ type: ACTIONS_REGIS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTIONS_LOGIN_FAIL, payload: error.msg });
  }
};
export { actionlogin, actionRegister };
