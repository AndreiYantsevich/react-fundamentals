import React, {FC} from 'react';

type PropsType = {
    post: {
        id: number
        title: string
        body: string
    }
    deletePost: (id: number) => void

}

const PostItem: FC<PropsType> = ({post, deletePost}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;