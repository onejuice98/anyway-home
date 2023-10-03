import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDaumPostcodePopup } from "react-daum-postcode";
import LinkButton from "../../common/button/LinkButton";
import AmtButton from "../../common/button/AmtButton";
import useAxios from "../../util/hooks/useAxios";
import { getAddressByLatLng } from "../../util/api/kakaoLocal";

interface DestinationPreviewProps {
  address: string;
}

interface SearchAddressProps {
  address: string;
  handleSearchClick: () => void;
}

type AddressDataType = {
  address: string;
  addressType: "R" | "J";
  bname: string;
  buildingName: string;
};
// *주소 입력 관련 컴포넌트* --> props 사용 확실 시까지 주석처리
// const InputAddress = (props: HTMLInputElement) => {
//     return (
//         <input className={props.className} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
//     );
// }

// const ButtonSearchAddress = (props: HTMLButtonElement) => {
//     return (
//         <button className={props.className}>
//             검색
//         </button>
//     );
// }

const DestinationPreview = ({ address }: DestinationPreviewProps) => {
  return (
    <div className="bg-blue-300 h-full w-full mb-3 flex justify-center items-center rounded-lg">
      {address}
    </div>
  );
};

const SearchAddress = ({ address, handleSearchClick }: SearchAddressProps) => {
  return (
    <div
      onClick={handleSearchClick}
      className="flex justify-between items-center mt-5"
    >
      <input
        value={address}
        type="text"
        placeholder="주소를 입력하세요"
        className="w-[75%] p-2 mr-2 rounded border-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent"
      />
      <AmtButton color="secondary" onClick={handleSearchClick}>
        검색
      </AmtButton>
    </div>
  );
};

const Main = () => {
  const [address, setAddress] = useState<string>("");

  const { data: latLng, apiPromise: getLatLng } = useAxios({
    url: getAddressByLatLng,
    method: "get",
  });

  const open = useDaumPostcodePopup();
  const handleComplete = (data: AddressDataType) => {
    const { address, addressType, bname, buildingName } = data;

    let fullAddress = address;

    if (addressType === "R") {
      let extraAddress = bname;

      if (buildingName) {
        extraAddress +=
          extraAddress !== "" ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    getLatLng({ address });
    setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const navigate = useNavigate();

  const buttonStart = () => {
    navigate("/game", { state: { address, latLng } });
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-between p-4">
      <div>
        <div className="flex gap-2">
          <LinkButton color="primary" url="/roadview">
            Roadview
          </LinkButton>
          <LinkButton color="secondary" url="/credits">
            Credits
          </LinkButton>
          <LinkButton color="danger" url="/ranking">
            Ranking
          </LinkButton>
        </div>
        <div className="grid place-items-center m-4">
          <div className="flex justify-center text-6xl font-bold">
            Anyway HOME
          </div>
          <div>
            <SearchAddress
              address={address}
              handleSearchClick={() =>
                open({ onComplete: handleComplete, autoClose: true })
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full w-full justify-between items-center">
        {address ? (
          <>
            <DestinationPreview address={address} />
            <AmtButton color="primary" onClick={buttonStart}>
              시작
            </AmtButton>
          </>
        ) : (
          <div className="text-6xl animate-moving">🫠</div>
        )}
      </div>
    </div>
  );
};

export default Main;
