import React from 'react';
import { Paper, Grid, Avatar, Link, Typography } from "@material-ui/core";

const paperStyle={padding:'30px 20px', width:280, margin:'20px auto'} 
const SignUp = () => {

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <h2>Sign Up</h2>
            </Paper>   
        </Grid>

    ); 

};

export default SignUp;
