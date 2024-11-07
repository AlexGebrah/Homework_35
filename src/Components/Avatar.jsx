const Avatar = ({size, user}) => {
    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={'avatar'}/>

    );
};

export default Avatar;