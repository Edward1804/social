import React from "react";
import s from "./content.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const ContentProfile = (props) => {
    return (
        <div className={s.content}>

            <ProfileInfo />
            <Posts posts={props.posts}/>

        </div>
    )
};

export default ContentProfile;