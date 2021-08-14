import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";

// import relief from "./components/images/relief.jpg";

const App = () => {
  return (
    <Container maxwidth="lg">
      <Typography variant="h2" align="center">
        Relief
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={1}>

            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
                <TextField type ="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
                <TextField abel="message" placeholder="Enter message" variant="outlined" fullWidth required></TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* <img src={relief} alt="relief" height="500" img align="right" /> */}
    </Container>
  );
};

export default App;
