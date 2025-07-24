import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to your Dashboard!
      </Typography>
      <Typography paragraph>
        You have successfully logged in.
      </Typography>
    </Box>
  );
};

export default Dashboard;
