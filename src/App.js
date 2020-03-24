import React from 'react';

import './styles/style.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Messages from "./components/messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <div className="container">
                    <Route path='/messages' component={Messages}/>
                    <Route path='/profile' component={Profile}/>
                </div>

            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
