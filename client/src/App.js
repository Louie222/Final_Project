import React from 'react';
import './Components/App.css'
import Login from './Components/login';
import SignUp from './Components/signup';
import SignInOutContainer from './Containers';
import homePage from './Components/homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/Login' component={Login} />
                <Route exact path='/homePage' component={homePage} />
            </Switch>
        <div className="App">
            <SignInOutContainer/>
        </div>
        </Router>
        
    );
}

export default App;


