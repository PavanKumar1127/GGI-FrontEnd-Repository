import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Grid container spacing={2}>
            {data.map(item => (
                <Grid item xs={12} key={item.id}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body1">{item.email}</Typography>
                        <Typography variant="body2">{item.description}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default DataList;
