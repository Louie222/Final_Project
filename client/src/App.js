import React from 'react';
import { Container, Typography, } from '@material-ui/core';

import relief from './components/images/relief.jpg';

const App = () =>  {
    return (
        <Container maxwidth="lg">
                <Typography variant="h2" align="center">Relief</Typography>
                <img src={relief} alt="relief" height="500" img align="right" />
            {/* <div>
            <h1>Relief!</h1>
            </div> */}
        </Container>
        
    );

}

export default App;