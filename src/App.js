import React from 'react';
import Login from './Components/Login';
import './styles.css';
// import Profile from './Components/Profile';
// import {Routes, Route} from 'react-router-dom';

const App = () => {

    return (
        <div>
            {/* <Routes>
                <Route path="/" Component={<Login />} />
                <Route path="/profile" Component={<Profile />} />
            </Routes> */}
            <Login />
        </div>
    )
}

export default App;