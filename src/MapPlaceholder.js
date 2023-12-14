import React from 'react';
import './MapPlaceholder.css';

function MapPlaceholder() {
    return (
        <div className="map-placeholder">
            {/* карта */}
            <img src="/map.jpeg" alt="Map Placeholder"/>
        </div>
    );
}

export default MapPlaceholder;