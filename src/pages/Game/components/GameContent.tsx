import { Map, MapMarker, Roadview } from "react-kakao-maps-sdk";
import { useState } from "react";
import { Position, ROADVIEW_CONFIG } from "../../Main";

interface GameContentProps {
  mapOpen: boolean;
  position: Position;
}

const MAP_CONFIG = {
  // 지도 크기
  style: {
    width: "25%",
    height: "25%",
  },
};

const GameContent = ({ mapOpen, position }: GameContentProps) => {
  const [userPosition, setUserPosition] = useState(position);
  return (
    <>
      <Roadview
        // 해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
        // * 만약 없다면 lat, lng로 설정 됩니다.
        position={userPosition}
        style={ROADVIEW_CONFIG.style}
        className="h-full rounded-lg"
        onPositionChanged={(target) => {
          const position = target.getPosition();
          setUserPosition((prev) => ({
            ...prev,
            lat: position.getLat(),
            lng: position.getLng(),
          }));
        }}
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
