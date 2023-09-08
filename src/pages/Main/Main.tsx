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
        <div className="bg-blue-300 h-screen m-10 flex justify-center items-center rounded-lg">
            destination preview
        </div>
    );
}


const Main = () => {
    return (<div> This is Main
        <div>
            <Link to="/roadview"><button className="p-4 bg-emerald-500 rounded hover:bg-emerald-700">Roadview</button></Link>
            <Link to="/credits"><button className="p-4 bg-pink-500 rounded hover:bg-pink-700">Credits</button></Link>
        </div>

        <div className="grid place-items-center">
                <Title />
                <form>
                    <InputAddress />
                    <ButtonSearchAddress />
                </form>
                
                
        </div>
        <DestinationPreview/>

    </div>)
}

export default Main;