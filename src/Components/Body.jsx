import Context from "./Context.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Context/>
        </div>
    );
};

export default Body;