import React from 'react';
import './PortsSelector.css';

function PortsSelector({ ports, onSelect }) {
    if (!ports) {

        return <div>Loading...</div>;
    }

    return (
        <div className="ports-selector">
            <select onChange={(e) => onSelect(e.target.value)}>
                {ports.map((port) => (
                    <option key={port} value={port}>{port}</option>
                ))}
            </select>
        </div>
    );
}

export default PortsSelector;