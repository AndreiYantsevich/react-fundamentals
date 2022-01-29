import React, {useState} from 'react';
import './styles/App.css'
import PostList, {PostType} from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: 1, title: 'Javascript', body: 'DescriptionJS'},
        {id: 2, title: 'React', body: 'DescriptionReact'},
        {id: 3, title: 'Redux', body: 'DescriptionRedux'}
    ])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post: PostType) => {
        let filteredPosts = posts.filter(p => p.id !== post.id)
        setPosts(filteredPosts)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title={'Post list 1'} deletePost={deletePost}/>
        </div>
    );
}

export default App;
