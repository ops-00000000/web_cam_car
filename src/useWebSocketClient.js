import { useState, useEffect, useRef } from 'react';

export function useWebSocketClient() {
    const [messages, setMessages] = useState([]);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://127.0.0.1:9090');

        ws.current.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.current.onmessage = (event) => {
            console.log('Received:', event.data);
            setMessages(prevMessages => [...prevMessages, event.data]);
        };

        ws.current.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        ws.current.onclose = () => {
            console.log('WebSocket Disconnected');
        };

        return () => {
            ws.current.close();
        };
    }, []);

    const sendMessage = (message) => {
        ws.current.send(message);
    };

    return { messages, sendMessage };
}
