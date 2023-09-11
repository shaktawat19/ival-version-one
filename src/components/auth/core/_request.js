import { handleGetDataFromApi, handlePostDataFromApi } from "../../../utils/_gFunctions.js/_handleAPI";
export const LOGIN_URL = `http://3.10.98.132:5000/account/api/login/`
// export const GET_USER_BY_ACCESSTOKEN_URL = `/auth/me`

export async function login(email, password) {
    return await handlePostDataFromApi(LOGIN_URL, { email, password })
  }

  // export async function getUserByToken(token) {
  //   return await handleGetDataFromApi(GET_USER_BY_ACCESSTOKEN_URL);
  //   // return axios.get<{ data: MeUserModel }>(GET_USER_BY_ACCESSTOKEN_URL, { headers: { Authorization: `Bearer ${token}`, 'Acess-Control-Allow-Origin': '*' } })
  // }