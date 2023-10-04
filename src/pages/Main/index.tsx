import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "../../common/button/LinkButton";
import useAxios from "../../util/hooks/useAxios";
import { getAddressByLatLng } from "../../util/api/kakaoLocal";
import { Roadview } from "react-kakao-maps-sdk";
import Button from "../../common/button";
import DaumPostcodeEmbed from "react-daum-postcode";

export type Position = { lat: number; lng: number; radius: number };

export type AddressDataType = {
  address: string;
  addressType: "R" | "J";
  bname: string;
  buildingName: string;
};

const DEFAULT_RADIUS = 50;
export const ROADVIEW_CONFIG = {
  // 로드뷰 크기
  style: {
    width: "100%",
    height: "100%",
  },
};

const Main = () => {
  const [address, setAddress] = useState<string>("");

  const [position, setPosition] = useState<Position>({ lat: 0, lng: 0, radius: DEFAULT_RADIUS });
  const { apiPromise: getLatLng } = useAxios({
    url: getAddressByLatLng,
    method: "get",
    resolve: (response) => {
      const { data } = response;
      setPosition((prev) => ({
        ...prev,
        lat: Number(data.documents[0].y),
        lng: Number(data.documents[0].x),
      }));
    },
  });

  const handleSearch = (data: AddressDataType) => {
    const { address, addressType, bname, buildingName } = data;

    let fullAddress = address;

    if (addressType === "R") {
      let extraAddress = bname;

      if (buildingName) {
        extraAddress += extraAddress !== "" ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    getLatLng({ address });
    setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const navigate = useNavigate();

  const buttonStart = () => {
    navigate("/game", { state: { address, position } });
  };

  return (
    <div className="flex flex-col w-screen h-screen p-4 gap-2">
      <div>
        {/* Header Link */}
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
        {/* Header Title  */}
        <div className="flex justify-center text-6xl font-bold">Anyway HOME</div>
      </div>
      {/* Roadview Preview */}
      <div className="flex justify-center mt-5">
        <DaumPostcodeEmbed onComplete={handleSearch} style={{ width: "680px", height: "460px" }} className="border-2 shadow-lg" />
      </div>

      {address && (
        <div className="flex flex-col h-full w-full justify-between items-center gap-2">
          <div className="flex items-center">
            <div className="p-2 mr-2 rounded bg-secondary text-white font-bold text-2xl">{address}</div>
            <Button color="primary" onClick={buttonStart}>
              시작
            </Button>
          </div>

          <Roadview position={position} style={ROADVIEW_CONFIG.style} className="h-full rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default Main;
