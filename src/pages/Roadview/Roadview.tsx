import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ButtonToggleMapProps {
	toggleMap: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


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
	return <div className="bg-blue-300 h-screen mt-3 m-5 flex justify-center items-center rounded-lg">roadview window
    </div>;
};

const MapWindow = () => {
	return <div className="absolute right-10 top-10 w-1/4 h-1/4 rounded-lg flex justify-center items-center bg-orange-500 w-100">map window</div>;
};

const Roadview = () => {
	const [toggleMap, setToggleMap] = useState(false);

	const clickHandler = () => {
		if (toggleMap == false) {
			setToggleMap(true);
		} else {
			setToggleMap(false);
		}

		console.log(toggleMap);
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
				<RoadviewWindow />
			</div>
			{toggleMap !== false && <MapWindow />}
		</div>
	);
};

export default Roadview;



