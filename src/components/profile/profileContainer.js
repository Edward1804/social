import React from "react";
import LeftColumnProfile from "./left-column";
import RightColumnProfile from "./right-column";
import ContentProfile from "./content";

const ProfileContainer = () => {
    return (
        <div className="container">
            <div className="wrapper-main">
                <LeftColumnProfile/>
                <ContentProfile/>
                <RightColumnProfile />
            </div>
        </div>
    )
};

export default ProfileContainer;