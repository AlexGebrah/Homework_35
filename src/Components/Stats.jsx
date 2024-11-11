import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../Utils/context.js";

const Stats = () => {
    const {user, setUser, stats} = useContext(TwitterContext);

    const handeleChangeName = () => {
        const newName = prompt("Введите новое имя:", user.name);
        if (newName) {
            setUser((oldInfo) => ({
                ...oldInfo,
                name: newName,
            }));
        }
    }

    return (
        <div className={'user-stats'}>
            <div onClick={handeleChangeName}>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
                    Followers: {stats.followers}
                </div>
                <div>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;