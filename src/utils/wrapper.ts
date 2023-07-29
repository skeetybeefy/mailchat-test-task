import axios from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

const BASE_URL = "https://api.lenzaos.com/"

const axiosInstance = axios.create({
  headers: {
    'version' : '0.0'
    }
  }
)

export const wrapper = (method: "post" | "get" | "put" | "delete", url: string, data?: any) => {
  const fullURL = BASE_URL + url
  return axiosInstance.request({method, url: fullURL, data}).then(checkResponse).catch(catchError)
};
