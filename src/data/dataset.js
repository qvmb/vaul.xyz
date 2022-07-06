import {WebSocket, isInitializing} from './websocket';

const statusColors = {
        online: "#7bff7b",
        idle: "#fcac00",
        dnd: "#f54646",
        offline: "#9c9c9c",
};

export function getPreparedDataset() {

        var data = WebSocket();
        
        if (data === "" || data === undefined || isInitializing === true) return;
        let _Data = {

                user: {
                        username: data.discord_user.username + "#" + data.discord_user.discriminator,
                        state: data.discord_status,
                        stateColor: statusColors[data.discord_status],
                        status: data.activities.length !== 0 ? data.activities[0].name === "Custom Status" ? data.activities[0].state : null : null,
                        avatar: `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`
                },

                spotify: data.listening_to_spotify === false ? null : {
                        song: data.spotify.song,
                        artist:  data.spotify.artist,
                        album: data.spotify.album.large_text,
                        cover: data.spotify.album_art_url,
                        timestamps: {
                                start: data.spotify.timestamps.start,
                                end: data.spotify.timestamps.end
                        }
                }

        }

        return _Data;
}
