import React from "react";
import s from "./messages.module.css"
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.msgList}>
                <div className={s.msgTitle + " " + "whiteBlock"}>
                    Messages
                </div>
                <div className={s.messagesList + " " + "whiteBlock"}>
                    <div className={s.msgUser}>
                        <NavLink to="/messages/1" activeClassName={s.active}>Dima</NavLink>
                    </div>
                    <div className={s.msgUser}>
                        <NavLink to="/messages/2" activeClassName={s.active}>Edward</NavLink>
                    </div>
                    <div className={s.msgUser}>
                        <NavLink to="/messages/3" activeClassName={s.active}>Nikita</NavLink>
                    </div>
                    <div className={s.msgUser}>
                        <NavLink to="/messages/4" activeClassName={s.active}>Roma</NavLink>
                    </div>
                    <div className={s.msgUser}>
                        <NavLink to="/messages/5" activeClassName={s.active}>Dima</NavLink>
                    </div>

                </div>
            </div>
            <div className={s.messages}>
                <div className={s.msgBarHead + " " + "whiteBlock"}>
                    Nikita
                </div>
                <div className={s.msgItems + " " + "whiteBlock"}>
                    <div className={s.item}>
                        hi!
                    </div>
                    <div className={s.item}>
                        what's up?
                    </div>

                    <div className={s.item}>
                        Hey!
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Messages;