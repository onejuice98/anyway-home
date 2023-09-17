import { Map, MapMarker, Roadview } from "react-kakao-maps-sdk";
import useKakaoLoader from "../../../util/hooks/useKakaoLoader";
import { useState } from "react";

interface GameContentProps {
  mapOpen: boolean;
}

const ROADVIEW_CONFIG = {
  // 로드뷰 크기
  style: {
    width: "100%",
    height: "100%",
  },
};

const MAP_CONFIG = {
  // 지도 크기
  style: {
    width: "25%",
    height: "25%",
  },
};

type PositionType = { lat: number; lng: number };
const DEFAULT_POSITION: PositionType = {
  lat: 33.450701,
  lng: 126.570667,
};

const GameContent = ({ mapOpen }: GameContentProps) => {
  useKakaoLoader();

  const [userPosition, setUserPosition] =
    useState<PositionType>(DEFAULT_POSITION);

  return (
    <>
      <Roadview
        // Radius 의 존재 의미?
        // 해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
        // * 만약 없다면 lat, lng로 설정 됩니다.
        position={{ ...userPosition, radius: 50 }}
        style={ROADVIEW_CONFIG.style}
        className="h-full rounded-lg"
      />
      {mapOpen && (
        <Map // 지도를 표시할 Container
          id="map"
          center={userPosition}
          style={MAP_CONFIG.style}
          level={3} // 지도의 확대 레벨
          draggable={true}
          className="rounded-lg absolute right-10 top-10"
        >
          <MapMarker position={userPosition} />
        </Map>
      )}
    </>
  );
};
export default GameContent;
