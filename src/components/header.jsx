import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="l-block">
                        <div className="logo">
                            logo
                        </div>
                        <div className="search">
                            search
                        </div>
                    </div>

                    <div className="r-block">
                        <div className="nav">
                            home
                            profile
                            message
                            posts
                            music
                        </div>
                        <div className="auth-block">
                            NameProfile
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Header;