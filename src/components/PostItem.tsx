import React, {FC} from 'react';
import MyButton from "./UI/Button/MyButton";
import {PostType} from "./PostList";
import {useNavigate} from "react-router-dom";

type PropsType = {
    post: PostType
    deletePost: (post: PostType) => void
}

const PostItem: FC<PropsType> = ({post, deletePost}) => {
    const router = useNavigate()
    console.log(router)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
                <MyButton onClick={() =>deletePost(post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;