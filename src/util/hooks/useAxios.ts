import { useState } from "react";
import axios, { Method } from "axios";

interface IAxios<T> {
  fixedParameter?: T;
  url: (newParameter: T) => string;
  method: Method;
}

/**
 * axios 활용을 위한 커스텀 훅
 *
 * @param url API 주소
 * @param fixedParameter API 주소 Parameter or Body
 * @param method axios 방식
 * @returns api response (data)
 */
const useAxios = <T>({ url, fixedParameter, method }: IAxios<T>) => {
  // api response의 타입을 특정할 수 없기에 any로 설정 (R 미사용 -> 데이터 가공시 오류 발생)
  const [data, setData] = useState<any>();
  const headers = {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_LOADER_APP_KEY2}`,
  };

  const apiPromise = async (newParameter: T) => {
    const promiseParameter = { ...fixedParameter, ...newParameter };
    const axiosInstance = await axios({
      method,
      url: url(promiseParameter),
      headers,
    });

    setData(axiosInstance.data);
  };

  return { data, apiPromise };
};

export default useAxios;
