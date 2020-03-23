import React from "react";
import s from "./content.module.css"
import Posts from "./Posts/Posts";

const ContentProfile = () => {
    return (
        <div className={s.content}>
            <div>
                name
            </div>
            <div>
                status
            </div>


            <Posts/>


        </div>
    )
};

export default ContentProfile;