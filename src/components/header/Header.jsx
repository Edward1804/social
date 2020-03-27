import React, {Component} from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from 'material-ui-icons/Home';
import People from 'material-ui-icons/People';
import Mail from 'material-ui-icons/Mail';
import Play from 'material-ui-icons/PlayArrow';
// import {makeStyles} from '@material-ui/styles';
import Avatar from 'material-ui/Avatar/Avatar';

let white = {color: 1};

// const useStyles = makeStyles(theme => ({
//     small: {
//         width: theme.spacing(3),
//         height: theme.spacing(3),
//     },
// }));

const Header = () => {
// class Header extends Component {
//     render() {
//     const classes = useStyles();
    return (
        <MuiThemeProvider>
            <div className={s.header}>
                <div className="container">
                    <div className={s.headerContent}>
                        <div className={s.leftBlock}>
                            <div className={s.logo}>
                                <img
                                    src="https://s.starladder.com/uploads/team_logo/d/d/e/c/meta_tag_6b803c5d99e831bcf9d9e07b134291db.png"
                                    alt=""/>
                            </div>
                            <div className={s.search}>
                                <div className={s.searchBar}>
                                    <SearchBar
                                        onChange={() => console.log('onChange')}
                                        onRequestSearch={() => console.log('onRequestSearch')}
                                        style={{
                                            margin: '0 auto',
                                            maxWidth: 800
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={s.rightBlock}>
                            <div className={s.nav}>
                                <NavLink to="/home" activeClassName={s.activeLink}>
                                    <div className={s.icon}>
                                        <Home style={white}/>
                                    </div>
                                    <div className={s.describe}>
                                        Home
                                    </div>
                                </NavLink>
                                <NavLink to="/profile" activeClassName={s.activeLink}>
                                    <div className={s.icon}>
                                        <People style={white}/>
                                    </div>
                                    <div className={s.describe}>
                                        Profile
                                    </div>

                                </NavLink>
                                <NavLink to="/messages" activeClassName={s.activeLink}>

                                    <div className={s.icon}>
                                        <Mail style={white}/>
                                    </div>
                                    <div className={s.describe}>
                                        Message
                                    </div>


                                </NavLink>
                                {/*<NavLink to="/posts" activeClassName={s.activeLink}>posts</NavLink>*/}
                                <NavLink to="/music" activeClassName={s.activeLink}>

                                    <div className={s.icon}>
                                        <Play style={white}/>
                                    </div>
                                    <div className={s.describe}>
                                        music
                                    </div>

                                </NavLink>
                            </div>


                            <div className={s.authBlock}>
                                <Avatar alt="Remy Sharp"
                                        src="https://fromthehipphoto.com/v3/wp-content/uploads/2019/12/foxy2.jpg"
                                        // className={classes.small}
                                />

                                NameProfile
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </MuiThemeProvider>
    )
};
// };

export default Header;