import React from "react";
import s from "./leftColumn.module.css"

const LeftColumnProfile = () => {
    return (
        <div className={s.leltColumn}>
            <div>
                ava
            </div>
            <div>
                small description
            </div>
            <div className={s.socialLink}>
                <div>
                    link1
                </div>
                <div>
                    link2
                </div>
                <div>
                    link3
                </div>
                <div>
                    link4
                </div>
            </div>
        </div>
    )
};

export default LeftColumnProfile;