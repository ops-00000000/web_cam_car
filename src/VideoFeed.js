import React, { useState } from 'react';
import './VideoFeed.css';

function VideoFeed() {
    const [activeCamera, setActiveCamera] = useState(null);

    const handleCameraSelect = (cameraName) => {
        setActiveCamera(cameraName);
    };

    const handleCloseActiveCamera = () => {
        setActiveCamera(null);
    };

    return (
        <div className="video-feed">
            {activeCamera && (
                <div className="camera active-camera" onClick={handleCloseActiveCamera}>
                    {activeCamera}
                </div>
            )}
            {!activeCamera && (
                <div className="camera-grid">
                    <div className="camera" id="video-1" onClick={() => handleCameraSelect('Передняя камера')}>Передняя камера</div>
                    <div className="camera" id="video-2" onClick={() => handleCameraSelect('Правая камера')}>Правая камера</div>
                    <div className="camera" id="video-3" onClick={() => handleCameraSelect('Задняя камера')}>Задняя камера</div>
                    <div className="camera" id="video-4" onClick={() => handleCameraSelect('Левая камера')}>Левая камера</div>
                </div>
            )}
        </div>
    );
}

export default VideoFeed;
