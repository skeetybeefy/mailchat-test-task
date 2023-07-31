import axios, { AxiosRequestConfig } from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

const BASE_URL = "https://api.lenzaos.com/"

export const axiosInstance = axios.create({
  headers: {
    'version' : '0.0'
    }
  }
)

export const wrapper = (config: AxiosRequestConfig) => {
  const { method, url, data, params } = config
  const fullURL = BASE_URL + url
  return axiosInstance.request({method, url: fullURL, data, params}).then(checkResponse).catch(catchError)
};
