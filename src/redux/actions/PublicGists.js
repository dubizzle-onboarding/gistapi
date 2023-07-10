import { PUBLIC_GISTS } from "./ActionTypes";

export function request(payload) {
  return {
    payload,
    type: PUBLIC_GISTS.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: PUBLIC_GISTS.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: PUBLIC_GISTS.FAILURE,
  };
}
