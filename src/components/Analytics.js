import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', leads: 4000, conversions: 2400 },
  { name: 'Feb', leads: 3000, conversions: 1398 },
  { name: 'Mar', leads: 2000, conversions: 9800 },
  { name: 'Apr', leads: 2780, conversions: 3908 },
  { name: 'May', leads: 1890, conversions: 4800 },
  { name: 'Jun', leads: 2390, conversions: 3800 },
];

const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Lead Generation and Conversion</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="leads" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="conversions" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Performing Channels</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Social Media</span>
              <span className="font-semibold">45%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Email Marketing</span>
              <span className="font-semibold">30%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Referrals</span>
              <span className="font-semibold">15%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Organic Search</span>
              <span className="font-semibold">10%</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Conversion Rate by Lead Source</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Website</span>
              <span className="font-semibold">12%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Social Media</span>
              <span className="font-semibold">8%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Email Campaigns</span>
              <span className="font-semibold">15%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Paid Ads</span>
              <span className="font-semibold">10%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;