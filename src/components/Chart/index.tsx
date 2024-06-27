// Chart.tsx

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment, { Moment } from 'moment';

interface ChartProps {
    timeframe: string;
    data: { timestamp: string; value: number }[];
}

const Chart: React.FC<ChartProps> = ({ timeframe, data }) => {
    const [filteredData, setFilteredData] = useState<{ timestamp: string; value: number }[]>([]);

    useEffect(() => {
        setFilteredData(formatData(data, timeframe));
    }, [data, timeframe]);

    const formatData = (data: { timestamp: string; value: number }[], timeframe: string) => {
        const endDate: Moment = moment();
        let startDate: Moment;

        if (timeframe === 'daily') {
            startDate = endDate.clone().subtract(1, 'days');
        } else if (timeframe === 'weekly') {
            startDate = endDate.clone().subtract(1, 'weeks');
        } else if (timeframe === 'monthly') {
            startDate = endDate.clone().subtract(1, 'months');
        } else {
            startDate = endDate.clone().subtract(1); // Default case
        }

        return data.filter(()=>startDate);
    };

    const handleClick = (dataPoint: any) => {
        alert(`Value: ${dataPoint.value}, Timestamp: ${dataPoint.timestamp}`);
    };

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ onClick: handleClick }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
