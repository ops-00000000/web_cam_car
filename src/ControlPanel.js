import React, { useState } from 'react';
import { useWebSocketClient } from './useWebSocketClient';
import './ControlPanel.css';

function ControlPanel() {
    const [message, setMessage] = useState('');
    const { messages, sendMessage } = useWebSocketClient();

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(message);
        setMessage('');
    };

    return (
        <div className="control-panel">
            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            <div className="messages-display">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
        </div>
    );
}

export default ControlPanel;
