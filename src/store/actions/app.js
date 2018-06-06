import { apis } from "config";
import { request } from "utils";
const { login } = apis;

export const queryLogin = (code) => {
  return request(login, {
    data: {
      helStr: code
    }
  })
}
