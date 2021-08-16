import React from 'react';
import './Components/app.css'
import Login from './Components/login';
import SignUp from './Components/signup';
import SignInOutContainer from './Containers';
import homePage from './Components/homepage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
    return <div>
        <Router>
            <Switch>
                <Route exact path={'/homepage'} component={homePage} />
            </Switch>      
            <SignInOutContainer/>
        </Router>
        </div>
}

export default App;






