import {Link} from "react-router-dom";


export const Title = () => {
    return (
    <h1 className="flex justify-center">
        Anyway HOME
    </h1>);
};

const InputAddress = () => {
    return (
        <input className="p-2 mr-2 rounded" type="text" placeholder="주소를 입력하세요" />
    );
}

const ButtonSearchAddress = () => {
    return (
        <button className="p-2 bg-blue-500 rounded hover:bg-blue-700">
        검색
        </button>
    );
}

const DestinationPreview = () => {
    return (
        <div className="flex justify-center items-center w-40 h-40 bg-blue-500">
            destination preview
        </div>
    );
}


const Main = () => {
    return (<div className="m-4 mb-7"> This is Main
        <div className="flex flex-col gap-2 mt-4">
            <Link to="/roadview"><button className="p-4 bg-emerald-500 rounded hover:bg-emerald-700">Roadview</button></Link>
            <Link to="/credit"><button className="p-4 bg-pink-500 rounded hover:bg-pink-700">Credit</button></Link>
        </div>

        <div className="grid place-items-center">
                <Title />
                <div>
                    <InputAddress />
                    <ButtonSearchAddress />
                </div>
                <DestinationPreview/>
            
        </div>

    </div>)
}

export default Main;