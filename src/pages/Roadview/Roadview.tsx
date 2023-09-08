const AddressToGo = () => {
    return (
        <div className= "bg-blue-400 w-fit h-fit p-1 rounded-md text-2xl">
            입력받은 주소
        </div>
    );
}

const Playtime = () => {
    return (
        <div className="bg-blue-500 w-fit h-fit p-1 rounded-md text-2xl">
                00:00:00
        </div>
    );
}

const ButtonToggleMap = () => {
    return (
        <button className="bg-orange-300 hover:bg-orange-400 w-fit h-fit p-1 rounded-md text-2xl">
            map
        </button>
    );
}

const RoadviewWindow = () => {
    return (
        <div className="bg-blue-300 h-screen m-10 flex justify-center items-center rounded-lg">
            roadview window
        </div>
    );
}


const Roadview = () => {
    return (
    <div>This is Roadview

        <div className="flex m-3">
            <AddressToGo />
            <Playtime />
            <ButtonToggleMap />
        </div>

        <div>
            <RoadviewWindow />
        </div>

    </div>
    );
}

export default Roadview;