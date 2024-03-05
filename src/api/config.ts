import Axios from "axios";
import { useUserStore } from '@/store/useUserStore.ts';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}`;

const axiosInstance = Axios.create({
    baseURL: `/kcbs/api${URL}`,
    // timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (request) => {
      //요청 보내기 전에 수행 로직
      
      const userStore = useUserStore();
      if (userStore.isLogin) {
          request.headers["Authorization"] = `Bearer ${userStore.user?.accessToken}`;
      }

      return request;
    },
    (err) => {
      //요청 에러 시 수행 로직
      return Promise.reject(err);
    }
  );
  
  //응답 인터셉터
  axiosInstance.interceptors.response.use(
    (response) => {
      //응답에 대한 로직

      const new_access_token = response.headers['New-Access-Token'];

      if (new_access_token) {
        useUserStore().setNewAccessToken(new_access_token);
      }

      return response.data;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  export default axiosInstance;