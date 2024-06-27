// App.tsx

import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import axios from 'axios';

const App: React.FC = () => {
    const [timeframe, setTimeframe] = useState('daily');
    const [data, setData] = useState<{ timestamp: string; value: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/data.json');
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Chart Application</h1>
            </header>
            <TimeframeSelector onSelect={setTimeframe} />
            <Chart timeframe={timeframe} data={data} />
        </div>
    );
};

export default App;
