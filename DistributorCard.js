// src/components/DistributorCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const DistributorCard = ({ distributor }) => {
  return (
    <Card style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {distributor.name}
        </Typography>
        <Typography color="textSecondary">
          Shipped Last Month: {distributor.shippedLastMonth}
        </Typography>
        <Typography color="textSecondary">
          Forecasted Next Month: {distributor.forecastedNextMonth}
        </Typography>
        <Typography color="textSecondary">
          YTD Average: {distributor.ytdAverage}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DistributorCard;
