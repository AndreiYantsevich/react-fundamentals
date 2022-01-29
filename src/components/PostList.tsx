import React, {FC} from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

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
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <PostItem post={post} deletePost={deletePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;