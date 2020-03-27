import React from 'react';

import './styles/style.css';
import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";
import {Route} from "react-router-dom";
import ProfilePage from "./components/profile/ProfilePage";



function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <div className="container">
                    <Route path='/messages' render={ () => <Messages data={props.state.messagePage} dispatch={props.dispatch}/>}/>

                    <Route path='/profile' render={ () => <ProfilePage data={props.state.profilePage} dispatch={props.dispatch}/> }/>
                </div>

            </div>

    );
}

export default App;
