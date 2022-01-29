import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList, {PostType} from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: 1, title: 'Javascript', body: 'JS'},
        {id: 2, title: 'React', body: 'React'},
        {id: 3, title: 'Redux', body: 'Redux'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a: { [index: string]: any } = {}, b: { [index: string]: any } = {}) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAddSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAddSearchedPosts} title={'Posts list 1'} deletePost={deletePost}/>
        </div>
    );
}

export default App;
