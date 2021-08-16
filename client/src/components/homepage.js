import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const homePage = () => {

const btnstyle={margin:'8px 0'}  
  const paperStyle={padding : 50,height:'200vh',width:600, margin:"0 auto"}
  return (
    <Grid>
      <h1 align="center">Relief</h1>
      <Paper style={paperStyle}>
          <Grid align="center">
            
        </Grid>
        <TextField
          label="Name"
          placeholder="Enter name"
          fullWidth
          required
        />
        <TextField
          label="Message"
          placeholder="Enter message"
          type="message"
          fullWidth
          required
        />
        <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Post</Button>
        
      </Paper>
    </Grid>
  );
};




export default homePage; 

