import { useState, useEffect } from 'react';

export function useWebSocketClient() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://127.0.0.1:9090');

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (event) => {
            console.log('Received:', event.data);
            setMessages(prevMessages => [...prevMessages, event.data]);
        };

        ws.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket Disconnected');
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = (message) => {
        const ws = new WebSocket('ws://127.0.0.1:9090');
        ws.onopen = () => {
            ws.send(message);
            ws.close();
        };
    };

    return { messages, sendMessage };
}





