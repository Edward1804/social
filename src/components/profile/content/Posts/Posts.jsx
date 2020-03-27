import React from "react";
import s from "./posts.module.css"
import Post from "./post/Post";





const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    return (
        <div>
            new post
            <div className={s.addPost}>
                <textarea name="add_posts" id="" cols="30" rows="10"></textarea>
                <button>ADD post</button>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    )
};

export default Posts;