import {useContext} from "react";
import {TwitterContext} from "../Utils/context.js";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(TwitterContext);

    const handleClick = (event) => {
        if (event.button === 0) {
            const newAvatarUrl = prompt("Введите новый URL для аватара:", user.avatar);
            if (newAvatarUrl) {
                setUser((oldInfo) => ({
                    ...oldInfo,
                    avatar: newAvatarUrl,
                }));
            }
            event.preventDefault();
        }
        if (event.button === 2) {
            const newName = prompt("Введите новое имя:", user.name);
            if (newName) {
                setUser((oldInfo) => ({
                    ...oldInfo,
                    name: newName,
                }));
            }
            event.preventDefault();
        }
    };

        return (
        <img onClick={handleClick}  onContextMenu={handleClick} className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    );
};

export default Avatar;