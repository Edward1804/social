import React from "react";
import LeftColumnProfile from "./leftColumn/LeftColumn";
import RightColumnProfile from "./rightColumn/RightColumn";
import ContentProfile from "./content/Content";

const ProfilePage = (props) => {
    return (
        // <div className="container">
        <div className="wrapperMain">
            <LeftColumnProfile />
            <ContentProfile posts={props.data.posts}/>
            <RightColumnProfile />
        </div>
        // </div>
    )
};

export default ProfilePage;