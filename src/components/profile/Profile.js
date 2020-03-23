import React from "react";
import LeftColumnProfile from "./leftColumn/LeftColumn";
import RightColumnProfile from "./rightColumn/RightColumn";
import ContentProfile from "./content/Content";

const Profile = () => {
    return (
        <div className="container">
            <div className="wrapperMain">
                <LeftColumnProfile/>
                <ContentProfile/>
                <RightColumnProfile />
            </div>
        </div>
    )
};

export default Profile;