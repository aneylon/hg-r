import { get, handleError, handleSuccess } from "./apiUtils";

export const Testing = (url, body) => {
  return get(url, body).then(handleSuccess).catch(handleError);
};
