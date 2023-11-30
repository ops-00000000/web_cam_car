import React, { useState } from 'react';
import './App.css';
import VideoFeed from './VideoFeed';
import ControlPanel from './ControlPanel';
import Login from './Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Система Управления</h1>
            </header>
            <main>
                <VideoFeed />
                <ControlPanel />
            </main>
        </div>
    );
}

export default App;
