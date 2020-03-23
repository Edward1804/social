import React from "react";
import s from './header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContent}>
                    <div className={s.leftBlock}>
                        <div className={s.logo}>
                            logo
                        </div>
                        <div className={s.search}>
                            search
                        </div>
                    </div>

                    <div className={s.rightBlock}>
                        <div className={s.nav}>
                            home
                            profile
                            message
                            posts
                            music
                        </div>
                        <div className={s.authBlock}>
                            NameProfile
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Header;