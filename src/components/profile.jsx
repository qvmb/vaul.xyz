import style from '../styles/Profile.module.css';

const Profile = (props) => {

        let data = props.data;

        if (data !== undefined) {
                return (
                        <div className={style.profile}>
                                <img src={data.user.avatar} style={{borderRadius: "5px", border: `2px ${data.user.stateColor} solid`}} alt="avatar"/>
                                <div className={style.profileContent}> 
                                        <p className={style.username}>{data.user.username}</p>
                                        <p className={style.userstate}>{data.user.status}</p>
                                </div>
                        </div>
                )
        }

}

export default Profile;