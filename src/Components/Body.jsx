import Context from "./Context.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = ({user, stats}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats}/>
            <Context/>
        </div>
    );
};

export default Body;