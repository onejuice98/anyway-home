import { useState, useEffect } from 'react';
import { Map, MapMarker, Roadview } from "react-kakao-maps-sdk"
import useKakaoLoader from "../useKakaoLoader"
import { useLocation } from 'react-router-dom';


interface ButtonToggleMapProps {
	toggleMap: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// declare global {
//     interface Window {
//         kakao: any;
//     }
// }
// export {};



const AddressToGo = () => {
    const addressLocation = useLocation();
    const address = addressLocation.state.address;

	return <div className="mr-3 bg-blue-400 w-fit h-fit p-1 rounded-md text-2xl">도착지: {address}</div>;
};

const Playtime = () => {
	return <div className="bg-blue-500 w-fit h-fit p-1 rounded-md text-2xl">00:00:00</div>;
};

const ButtonToggleMap = ({ toggleMap, onClick }: ButtonToggleMapProps) => {
	return (
		<button onClick={onClick} className="bg-orange-300 hover:bg-orange-400 w-fit h-fit p-1 rounded-md text-2xl">
			map
		</button>
	);
};

const RoadviewWindow = () => {
  useKakaoLoader()

	return (
      <Roadview position={{
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
        className="h-screen mt-3 m-5 rounded-lg">
      </Roadview>
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

    useKakaoLoader()

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

const Game = () => {
	const [toggleMap, setToggleMap] = useState(false);
    

	const clickHandler = () => {
		if (toggleMap == false) {
			setToggleMap(true);
		} else {
			setToggleMap(false);
		}
	};

	return (
		<div>
			This is Roadview
			<div className="">
				<AddressToGo />
			</div>
            <div className="flex">
                <Playtime />
				<ButtonToggleMap toggleMap={toggleMap} onClick={clickHandler} />
            </div>
            <div>
              <div className="h-screen mt-3 m-5 rounded-lg">
				        <RoadviewWindow />
              </div>
			</div>
            <div className="absolute right-10 top-10 w-1/4 h-1/4">
			    {toggleMap !== false && <MapWindow />}
            </div>
		</div>
	);
};

export default Game;