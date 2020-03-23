import React from "react";
import s from "./posts.module.css"
import Post from "./post/Post";

const Posts = () => {
    return (
        <div>
            new post
            <div className={s.addPost}>
                <textarea name="add_posts" id="" cols="30" rows="10"></textarea>
                <button>ADD post</button>
            </div>
            <div className="posts">
                <Post message="hello, how are you?"/>
                <Post message="My name is Edward"/>
            </div>
        </div>
    )
};

export default Posts;