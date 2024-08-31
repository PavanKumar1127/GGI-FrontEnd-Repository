import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GGI Tech Assignment
                </Typography>
                <Button color="inherit" component={Link} to="/">Data List</Button>
                <Button color="inherit" component={Link} to="/submit">Submit Form</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
