import {Link} from "react-router-dom";
import React, {ReactHTMLElement, useState} from "react"


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

const DestinationPreview = (props: any) => {
    return (
        <div className="bg-blue-300 h-screen m-10 flex justify-center items-center rounded-lg">
            destination preview
        </div>
    );
}

const SearchAddress = () => {
    const [address, setAddress] = useState("");

    const onChange = (event: React.FormEvent<HTMLInputElement>) => setAddress(event.currentTarget.value);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      alert(address);
    };
    
    return (
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange}placeholder="주소를 입력하세요" className="p-2 mr-2 rounded"/>
        <button className="p-2 bg-blue-500 rounded hover:bg-blue-700">검색</button>
      </form>
    );
}

const Main = () => {
    return (<div> This is Main
        <div>
            <Link to="/roadview"><button className="p-4 bg-emerald-500 rounded hover:bg-emerald-700">Roadview</button></Link>
            <Link to="/credits"><button className="p-4 bg-pink-500 rounded hover:bg-pink-700">Credits</button></Link>
        </div>

        <div className="grid place-items-center">
                <Title className="flex justify-center text-6xl"/>
                <SearchAddress />
        </div>

        <DestinationPreview/>

    </div>)
}

export default Main;