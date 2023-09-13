import { handleGetDataFromApi, handlePostDataFromApi } from "../../../utils/_gFunctions/_handleAPI";
import siteConfig from "../../../services/_siteConfig";


export async function login(email, password) {
    return await handlePostDataFromApi(siteConfig.LOGIN, { email, password },undefined)
  }

  export async function getUserByToken(token) {
    return await handleGetDataFromApi(siteConfig.GET_USER_BY_ACCESSTOKEN_URL);
    // return axios.get<{ data: MeUserModel }>(GET_USER_BY_ACCESSTOKEN_URL, { headers: { Authorization: `Bearer ${token}`, 'Acess-Control-Allow-Origin': '*' } })
  }


  