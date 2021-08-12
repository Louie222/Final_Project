import React from 'react';
import { Container, Appbar, Typography, Grow, Grid } from '@material-ui/core';

import relief from './components/images/relief.jpg';

const App = () =>  {
    return (
        <Container maxwidth="lg">
            <Appbar position="static" color="inherit">
                <Typography variant="h2" align="center">Relief</Typography>
                <img src={relief} alt="relief" height="60" />
            </Appbar>
            <div>
            <h1>Relief!</h1>
            </div>
        </Container>
        
    );

}

export default App;