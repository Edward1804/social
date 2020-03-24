import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContent}>
                    <div className={s.leftBlock}>
                        <div className={s.logo}>
                            <img src="https://s.starladder.com/uploads/team_logo/d/d/e/c/meta_tag_6b803c5d99e831bcf9d9e07b134291db.png" alt=""/>
                        </div>
                        <div className={s.search}>
                            search
                        </div>
                    </div>

                    <div className={s.rightBlock}>
                        <div className={s.nav}>
                            <NavLink to="/home" activeClassName={s.activeLink}>home</NavLink>
                            <NavLink to="/profile" activeClassName={s.activeLink}>profile</NavLink>
                            <NavLink to="/messages" activeClassName={s.activeLink}>message</NavLink>
                            <NavLink to="/posts" activeClassName={s.activeLink}>posts</NavLink>
                            <NavLink to="/music" activeClassName={s.activeLink}>music</NavLink>
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