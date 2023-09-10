import {Link} from "react-router-dom";
import React, {ReactHTMLElement, useState} from "react"

interface DestinationPreviewProps {
    address: string;
}

interface SearchAddressProps {
    address: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}


const Title = (props: any) => {
    return (
    <h1 className={props.className}>
        Anyway HOME
    </h1>);
};

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

const DestinationPreview = ({address}: DestinationPreviewProps) => {
    return (
        <div className="bg-blue-300 h-screen w-screen mb-3 flex justify-center items-center rounded-lg">
            {address}
        </div>
    );
}

const SearchAddress = ({address, onSubmit}: SearchAddressProps) => {
    
    return (
      <form onSubmit={onSubmit} className="m-5">
        <input id="inputAddress" type="text" placeholder="주소를 입력하세요" className="p-2 mr-2 rounded"/>
        <button type="submit" className="p-2 bg-blue-500 rounded hover:bg-blue-700">검색</button>
      </form>
    );
}

const Main = () => {
    const [address, setAddress] = useState("");

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAddress(event.currentTarget.inputAddress.value);
      };

    return (<div> This is Main
        <div>
            <Link to="/roadview"><button className="p-4 bg-emerald-500 rounded hover:bg-emerald-700">Roadview</button></Link>
            <Link to="/credits"><button className="p-4 bg-pink-500 rounded hover:bg-pink-700">Credits</button></Link>
        </div>

        <div className="grid place-items-center">
                <Title className="flex justify-center text-6xl m-4"/>
                <SearchAddress address={address} onSubmit={onSubmit}/>
        </div>

        <div className="grid place-items-center">
            {address !== "" && <DestinationPreview address={address}/>}
            {address !== "" && <button className="flex justify-center items-center bg-blue-400 p-5 rounded-lg hover:bg-blue-500">시작</button>}
        </div>
    </div>)
}

export default Main;