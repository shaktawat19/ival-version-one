import siteConfig from "../../services/_siteConfig";

export async function Stage(url,body) {
    return await handlePostDataFromApi(url, { body })
  }