import {Link} from "react-router-dom";

const Main = () => {
    return (<div className="m-4 mb-7"> This is Main
        <div className="flex flex-col gap-2 mt-4">
            <Link to="/roadview"><button className="p-4 bg-emerald-500 rounded hover:bg-emerald-700">Roadview</button></Link>
            <Link to="/credit"><button className="p-4 bg-pink-500 rounded hover:bg-pink-700">Credit</button></Link>
        </div>

    </div>)
}

export default Main;