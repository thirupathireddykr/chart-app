// TimeframeSelector.tsx

import React from 'react';

interface TimeframeSelectorProps {
    onSelect: (timeframe: string) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({ onSelect }) => {
    const handleTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value);
    };

    return (
        <div>
            <label htmlFor="timeframe">Select Timeframe: </label>
            <select id="timeframe" onChange={handleTimeframeChange}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
        </div>
    );
};

export default TimeframeSelector;
