import React, {FC} from 'react';
import PostItem from "./PostItem";

export type PostType = {
    id: number | null
    title: string
    body: string
}

type PropsType = {
    posts: Array<PostType>
    title: string
    deletePost: (post: PostType) => void
}

const PostList: FC<PropsType> = ({posts, title, deletePost}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Posts not found!
            </h1>
        )
    }

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