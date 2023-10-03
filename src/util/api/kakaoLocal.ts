interface IKakaoLocal {
  address?: string;
}
export const getAddressByLatLng = (param: IKakaoLocal) =>
  `https://dapi.kakao.com/v2/local/search/address.json?query=${param.address}`;
