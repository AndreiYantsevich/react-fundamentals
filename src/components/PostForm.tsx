import React, {ChangeEvent, MouseEvent, FC, useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import {PostType} from "./PostList";

type PropsType = {
    create: (newPost: PostType) => void
}

const PostForm: FC<PropsType> = ({create}) => {
    const [post, setPost] = useState({id: null, title: '', body: ''})

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const changeBodyHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, body: e.currentTarget.value})
    }

    const addNewPost = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({id: null, title: '', body: ''})
    }

    return (
        <form>
            <MyInput type="text" placeholder={'Post name'} onChange={changeTitleHandler} value={post.title}/>
            <MyInput type="text" placeholder={'Post body'} onChange={changeBodyHandler} value={post.body}/>
            <MyButton onClick={addNewPost} post={post}>Add post</MyButton>
        </form>
    );
};

export default PostForm;