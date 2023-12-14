
import React from 'react';
import './Characteristics.css';

function Characteristics({ data }) {
    return (
        <div className="characteristics">
            {/* Отображение данных характеристик */}
            {data.map((char, index) => (
                <div key={index} className="characteristic">
                    <span className="characteristic-label">{char.label}: </span>
                    <span className="characteristic-value">{char.value}</span>
                </div>
            ))}
        </div>
    );
}

export default Characteristics;
