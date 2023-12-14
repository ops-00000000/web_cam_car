import { useState, useEffect, useRef } from 'react';

export function useWebSocketClient() {
    const [messages, setMessages] = useState([]);
    const ws = useRef(null);
    const websocketUrl = 'ws://127.0.0.1:9090';
    const logReceivedMessages = true;

    useEffect(() => {
        const connectWebSocket = () => {
            ws.current = new WebSocket(websocketUrl);

            ws.current.onopen = () => {
                console.log('Connected to WebSocket');
            };

            ws.current.onmessage = (event) => {
                if (logReceivedMessages) {
                    console.log('Received:', event.data);
                }
                setMessages(prevMessages => [...prevMessages, event.data]);
            };

            ws.current.onerror = (error) => {
                console.error('WebSocket Error:', error);
            };

            ws.current.onclose = () => {
                console.log('WebSocket Disconnected');
                setTimeout(connectWebSocket, 5000); // Attempt to reconnect after 5 seconds
            };
        };

        connectWebSocket();

        return () => {
            ws.current.close();
        };
    }, []);

    const sendMessage = (message) => {
        if (typeof message === 'string') {
            try {
                ws.current.send(message);
            } catch (error) {
                console.error('WebSocket Send Error:', error);
            }
        } else {
            console.error('Invalid message format');
        }
    };

    return { messages, sendMessage };
}
