import { useState, useEffect } from 'react';
import { w3cwebsocket as Websocket } from "websocket";

import { OPCODES, logEvent } from "./misc";

const userId = "956267432689958973";

const client = new Websocket("wss://api.lanyard.rest/socket");

let heartbeatInterval;

export var isInitializing = true;

export function WebSocket()     {
       
        const [userData, setUserData] = useState();
        useEffect(() => {
                function connect()      {

                        client.onopen = () => {
                                logEvent("Connected");
                                isInitializing = false;
                        }

                        client.onmessage = ({data}) => {
                               
                                const _Data = JSON.parse(data);;
                                switch (_Data.op) {

                                        case OPCODES.HELLO:
                                                client.send(
                                                        JSON.stringify({
                                                                op: OPCODES.INIT,
                                                                d: {
                                                                        subscribe_to_id: userId,
                                                                },
                                                        })
                                                );

                                                heartbeatInterval = setInterval(() => {
                                                        client.send(
                                                                JSON.stringify({
                                                                        op: OPCODES.HEARTBEAT,
                                                                })
                                                        );
                                                }, _Data.d.heartbeat_interval);
                                                break;
                                        
                                        case OPCODES.INFO:
                                               
                                                switch (_Data.t) {
                                                        case "INIT_STATE":
                                                        case "PRESENCE_UPDATE":
                                                                if (_Data.d) setUserData(_Data.d);
                                                                break;

                                                        default: 
                                                                break;
                                                };
                                                break;
                                        
                                        default: 
                                                break;
                                }
                        }

                        client.onclose = (event) => {
                                clearInterval(heartbeatInterval);
                                logEvent(`Closed | ${event.reason}`);
                                connect();
                        }

                };
                connect()

        });

        return (userData);
}
