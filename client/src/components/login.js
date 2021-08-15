import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
// import { useHistory } from 'react-router-dom';



const Login = ({handleChange}) => {

    // let history = useHistory();

  const btnstyle={margin:'8px 0'} 
  const avatarStyle={backgroundColor:'orange'}  
  const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
  return (
    <Grid>
      <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}><LockTwoToneIcon/></Avatar>
            <h2>Sign in</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
    />
            <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Sign In</Button>
            <Typography> 
              <Link href="#">
            Forgot password?
        </Link>
        </Typography>
        <Typography> Do you have an account? 
            <Link href="#" onClick={()=>handleChange("event",1)}>
                Sign Up
            </Link>
        </Typography>
        </Paper>
    </Grid>
  );
};



export default Login;
