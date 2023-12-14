import React, { useState } from 'react';
import './App.css';
import VideoFeed from './VideoFeed';
import ControlPanel from './ControlPanel';
import Characteristics from './Characteristics';
import MapPlaceholder from './MapPlaceholder';
import PortsSelector from './PortsSelector';
import Login from './Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState([]); // Предполагаемые данные для характеристик
    const [ports, setPorts] = useState([]); // Предполагаемые данные для портов

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handlePortSelect = (port) => {
        // Логика обработки выбора порта
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }
    return (
        <div className="App">
            {/* ... */}
            <main>
                <div className="video-feed-container">
                    <VideoFeed />
                    <MapPlaceholder />
                </div>
                <div className="right-panel">
                    <div className="ports-selector-container">
                        <PortsSelector ports={ports} onSelect={handlePortSelect} />
                    </div>
                    <div className="characteristics-container">
                        <Characteristics data={data} />
                    </div>
                    <div className="control-panel-container">
                        <ControlPanel />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
