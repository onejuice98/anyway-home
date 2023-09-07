import {Link} from "react-router-dom";

const Main = () => {
    return (<div> This is Main
        <Link to="/roadview"><button >Roadview</button></Link>
        <Link to="/credit"><button>Credit</button></Link>
    </div>)
}

export default Main;