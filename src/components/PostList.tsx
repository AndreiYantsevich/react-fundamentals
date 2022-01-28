import React, {FC} from 'react';
import PostItem from "./PostItem";

type PostType = {
    id: number
    title: string
    body: string
}

type PropsType = {
    posts: Array<PostType>
    title: string
    deletePost: (id: number) => void
}

const PostList: FC<PropsType> = ({posts, title, deletePost}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post) => {
                return <PostItem post={post} key={post.id} deletePost={deletePost}/>
            })}
        </div>
    );
};

export default PostList;