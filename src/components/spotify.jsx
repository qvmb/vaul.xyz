import { useState } from 'react';
import { timestampsToPrecents } from '../data/misc';
import style from "../styles/Spotify.module.css"
let spotifyInterval;

const Spotify = (props) => {

        let data = props.data;

        const [songProgress, setSongProgress] = useState("1%");
        
        if (data !== undefined) {

                clearInterval(spotifyInterval);
                if (data.spotify != null) spotifyInterval = setInterval(() => { setSongProgress(timestampsToPrecents(data.spotify.timestamps.start, data.spotify.timestamps.end))}, 1000);
                return (
                        <div className="spotify flexible" style={{alignItems: "center"}}>
                                {
                                        data.spotify == null ? (
                                                <p className={style.inactivityText}>not listening to anything atm</p>
                                        ) : (
                                                <>
                                                <img className = {style.cover} src={data.spotify.cover} alt="cover"/>
                                                <div className="block" style={{margin: "0px 0px 0px 10px", width: "100%"}}>
                                                        <p className={style.song}>{data.spotify.song }</p>
                                                        <p className={style.artist}>{"by " + data.spotify.artist }</p>
                                                        <p className={style.album}>{"on " + data.spotify.album}</p>
                                                        <div className={style.bar} style={{width: songProgress}}></div>
                                                </div>
                                                </>        
                                        )
                                }
                        </div>
                )  
        }
        
}

export default Spotify;