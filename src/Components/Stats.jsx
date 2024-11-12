import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../Utils/context.js";

const Stats = () => {
    const {user, stats, setStats} = useContext(TwitterContext);

    const handleFollowersClick = (event) => {
        if (event.button === 0) {
            setStats((oldInfo) => ({
                ...oldInfo,
                followers: stats.followers + 1,
            }));
        }

        if (event.button === 2) {
            setStats((oldInfo) => ({
                ...oldInfo,
                followers: stats.followers > 0 ? stats.followers - 1 : 0,
            }));
            event.preventDefault();
        }
    }

    const handleFollowingClick = (event) => {
        if (event.button === 0) {
            setStats((oldInfo) => ({
                ...oldInfo,
                following: stats.following + 1
            }));
        }

        if (event.button === 2) {
            setStats((oldInfo) => ({
                ...oldInfo,
                following: stats.following > 0 ? stats.following - 1 : 0,
            }));
            event.preventDefault();
        }
    }

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={handleFollowersClick} onContextMenu={handleFollowersClick}>
                    Followers: {stats.followers}
                </div>
                <div onClick={handleFollowingClick} onContextMenu={handleFollowingClick}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
}

export default Stats;