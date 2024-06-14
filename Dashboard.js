// src/components/Dashboard.js
import React from 'react';
import DistributorCard from './DistributorCard';
import { distributors } from '../data/mockData';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {distributors.map((distributor, index) => (
        <DistributorCard key={index} distributor={distributor} />
      ))}
    </div>
  );
};

export default Dashboard;
