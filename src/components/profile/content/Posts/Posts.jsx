import React, {createRef} from "react";
import s from "./posts.module.css"
import Post from "./post/Post";
import {addPostActionCreator, updateTextActionCreator} from "../../../../redux/state";


const Posts = (props) => {

    let postsElements = props.data.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);


    let newPostElement = createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };


    let updateText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextActionCreator(text));
    };



    return (
        <div>
            new post
            <div className={s.addPost}>
                <textarea onChange={updateText} ref={newPostElement} value={props.data.newPostText} name="add_posts" id="" cols="30" rows="10"></textarea>
                <button onClick={addPost}>ADD post</button>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    )
};

export default Posts;