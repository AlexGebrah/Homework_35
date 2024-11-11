import {useContext} from "react";
import {TwitterContext} from "../Utils/context.js";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(TwitterContext);

    const handleAvatarClick = () => {
        const newAvatarUrl = prompt("Введите новый URL для аватара:", user.avatar);
        if (newAvatarUrl) {
            setUser((oldInfo) => ({
                ...oldInfo,
                avatar: newAvatarUrl,
            }));
        }
    };

        return (
        <img onClick={handleAvatarClick} className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    );
};

export default Avatar;