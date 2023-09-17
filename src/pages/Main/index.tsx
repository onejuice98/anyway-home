import { useNavigate } from "react-router-dom";
import DaumPostcodeEmbed from "react-daum-postcode";
import React, { useState } from "react";
import LinkButton from "../../common/button/LinkButton";
import AmtButton from "../../common/button/AmtButton";

interface DestinationPreviewProps {
  address: string;
}

interface SearchAddressProps {
  address: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

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
    <div className="bg-blue-300 h-screen w-screen mb-3 flex justify-center items-center rounded-lg">
      {address}
    </div>
  );
};

const SearchAddress = ({ address, onSubmit }: SearchAddressProps) => {
  return (
    <form onSubmit={onSubmit} className="m-5">
      <input
        id="inputAddress"
        type="text"
        placeholder="주소를 입력하세요"
        className="p-2 mr-2 rounded"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        검색
      </button>
    </form>
  );
};

const Main = () => {
  const [address, setAddress] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAddress(event.currentTarget.inputAddress.value);
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const navigate = useNavigate();

  const buttonStart = () => {
    navigate("/game", { state: { address } });
  };

  return (
    <div>
      <div className="flex gap-2">
        <LinkButton color="primary">Roadview</LinkButton>
        <LinkButton color="secondary">Credits</LinkButton>
        <LinkButton color="danger">Ranking</LinkButton>
      </div>

      <div className="grid place-items-center m-4">
        <div className="flex justify-center text-6xl font-bold">
          Anyway HOME
        </div>
        <div>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </div>
      </div>

      <div className="grid place-items-center">
        {address && (
          <>
            <DestinationPreview address={address} />
            <AmtButton color="secondary" onClick={buttonStart}>
              시작
            </AmtButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
