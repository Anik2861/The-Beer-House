import { Tooltip } from 'bootstrap';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 2410,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 4230,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 7260,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 5290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 6010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
        }
    ]

    return (
        <div className='chart-container'>
            
            <div className='bar-chart'>
            <h1>Return on investment :</h1>
                <BarChart width={450} height={280} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />

                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='line-chart'>
                <h1>Revenue from sell :</h1>
                <LineChart width={450} height={280} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;