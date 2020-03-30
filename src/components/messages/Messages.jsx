import React, {createRef} from "react";
import s from "./messages.module.css"
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";

const MsgUser = (props) => {

    let path = "/messages/" + props.id;
    return (
        <div className={s.msgUser}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

const MsgItem = (props) => {
    return (
        <div className={s.item}>
            {props.message}
        </div>
    )
};





const Messages = (props) => {

    let messagesElements = props.data.messages.map(m => <MsgItem message={m.message} />);
    let listMessageElements = props.data.dialogs.map(u => <MsgUser name={u.name} id={u.id} />);

    let newMessageElement = createRef();



    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let updateText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.msgList}>
                <div className={s.msgTitle + " " + "whiteBlock"}>
                    Messages
                </div>
                <div className={s.messagesList + " " + "whiteBlock"}>
                    {listMessageElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.msgBarHead + " " + "whiteBlock"}>
                    Nikita
                </div>
                <div className={s.msgItems + " " + "whiteBlock"}>
                    {messagesElements}
                </div>
                <div className={s.sendMessage + " " + "whiteBlock"}>
                    <textarea onChange={updateText} value={props.data.messageText} ref={newMessageElement}></textarea>
                    <button onClick={sendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
};

export default Messages;