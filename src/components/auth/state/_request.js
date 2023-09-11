import siteConfig from "../../../../services/_siteConfig";
import { ENUM_API_STATUS, handleGetDataFromApi, handlePostDataFromApi } from "../../../../utils";
import { apiResponse } from "../../../utils/_gTypes/index";

const forgetPasswordRequest = async (body, isLoading) => {
  let res = await handlePostDataFromApi(siteConfig.AUTH + "/forget-password", body, isLoading ? isLoading : undefined);

  if (res.data?.status === ENUM_API_STATUS.ERROR) {
    console.log(res?.data?.message, "toastify");
    return res;
  }

  return res;
};

const forgetPasswordOTPCheckRequest = async (body, isLoading) => {
  let res = await handlePostDataFromApi(siteConfig.AUTH + "/forget-password/otp", body, isLoading ? isLoading : undefined);

  if (res.data?.status === ENUM_API_STATUS.ERROR) {
    console.log(res?.data?.message, "toastify");
    return res;
  }

  return res;
};

const passwordResetRequest = async (body, isLoading) => {
  let res = await handlePostDataFromApi(siteConfig.AUTH + "/forgot-password/new-password", body, isLoading ? isLoading : undefined);

  if (res.data?.status === ENUM_API_STATUS.ERROR) {
    console.log(res?.data?.message, "toastify");
    return res;
  }

  return res;
};

export {
  forgetPasswordRequest,
  forgetPasswordOTPCheckRequest,
  passwordResetRequest
};
