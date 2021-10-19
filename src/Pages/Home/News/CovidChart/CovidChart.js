import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'January',
        pv: 29000,
        amt: 200,
    },
    {
        name: 'February',
        pv: 22098,
        amt: 2210,
    },
    {
        name: 'March',
        pv: 27000,
        amt: 2290,
    },
    {
        name: 'April',
        pv: 19000,
        amt: 2000,
    },
    {
        name: 'May',
        pv: 30800,
        amt: 2181,
    },
    {
        name: 'June',
        pv: 30000,
        amt: 2500,
    },
    {
        name: 'July',
        pv: 29000,
        amt: 2100,
    },
];

const CovidChart = () => {
    return (
            <ResponsiveContainer width="40%" height="50%" className=' col-md-3 col-12 mx-2'>
                <div>
                    <LineChart
                        width={450}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </ResponsiveContainer>
    );
};

export default CovidChart;