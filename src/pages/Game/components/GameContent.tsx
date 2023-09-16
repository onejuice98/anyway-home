import { Map, MapMarker, Roadview } from "react-kakao-maps-sdk";
import useKakaoLoader from "../../../util/hooks/useKakaoLoader";

interface GameContentProps {
  mapOpen: boolean;
}

const RoadviewWindow = () => {
  useKakaoLoader();

  return (
    <Roadview
      position={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
        radius: 50,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
      }}
      className="h-screen mt-3 m-5 rounded-lg"
    ></Roadview>
  );
};
const MapWindow = () => {
  // useEffect(() => {
  //     const container = document.getElementById('map');
  //     const options = {
  //     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  // };
  //     const map = new window.kakao.maps.Map(container, options);
  // }, [])

  useKakaoLoader();

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
      }}
      level={3} // 지도의 확대 레벨
      draggable={true}
      className="rounded-lg"
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 33.450701,
          lng: 126.570667,
        }}
      />
    </Map>
  );
};

const GameContent = ({ mapOpen }: GameContentProps) => {
  return (
    <>
      <div className="h-screen mt-3 m-5 rounded-lg">
        <RoadviewWindow />
      </div>
      <div className="absolute right-10 top-10 w-1/4 h-1/4">
        {mapOpen !== false && <MapWindow />}
      </div>
    </>
  );
};
export default GameContent;
