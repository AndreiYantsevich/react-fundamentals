import React, {ChangeEvent, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'DescriptionJS'},
        {id: 2, title: 'React', body: 'DescriptionReact'},
        {id: 3, title: 'Redux', body: 'DescriptionRedux'}
    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const deletePost = (id: number) => {
        let filteredPosts = posts.filter(post => post.id !== id)
        setPosts(filteredPosts)
    }

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const changeDescrHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBody(e.currentTarget.value)
    }

    const addPost = (title: string, body: string) => {
        let newPost = {id: posts.length + 1, title: title, body: body}
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder={'Post name'} onChange={changeNameHandler}/>
                <MyInput type="text" placeholder={'Post body'} onChange={changeDescrHandler}/>
                <MyButton addPost={addPost} title={title} description={body}>Add post</MyButton>
            </form>
            <PostList posts={posts} title={'Post list 1'} deletePost={deletePost}/>
        </div>
    );
}

export default App;
