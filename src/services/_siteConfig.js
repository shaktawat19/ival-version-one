const siteConfig = Object.freeze({
    BASE_URL: process.env.REACT_APP_API_URL,
  
    //LOCAL STORAGE PROPERTIES
    DC_AUTH_IVAL: "dc_auth_ival",
    ACCESS_TOKEN: "access_token",
  
    //Query Param Keys
    AUTH_URL: "auth_url",
    REDIRECTED_URL: "redirected_url",
    // PCONNECTOR_BASE_URL: ``,


    //ENDPOINTS PROPERTIES
    LOGIN:"/api/login/",
    GET_USER_BY_ACCESSTOKEN_URL:"/me/",
    ACCOUNT:"/accounts"
  });
  
  export default siteConfig;