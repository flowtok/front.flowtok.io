import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export const instance = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers: {
      "Content-Type": "application/json",
   }
});

// middleware which intercept every request
instance.interceptors.request.use(
   (config: AxiosRequestConfig) => {
      return {
         ...config,
         headers: {
            ...config.headers,
         }
      }
   }
)

// middleware which intercept every response
instance.interceptors.response.use((response: AxiosResponse<BaseResponseType<any>>) => {
   // everything went well
   return response; // pass data through
}, error => {
   // when error
   return error.response // return error data
});

// it's just example
export type BaseResponseType<D> = {
   success: boolean
   message: string
   data: D
}