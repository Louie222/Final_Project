import React from 'react';
import Login from './Components/login';
import SignUp from './Components/signup';
import SignInOutContainer from './Containers';

function App() {
    return (
        <div className="App">
            <SignUp/>
            <Login/>
            <signInOutContainer/>
        </div>
    );
}

export default App;


