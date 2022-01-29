import React, {useEffect, useState} from 'react';
import './styles/App.css'
import PostList, {PostType} from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./api/PostService";
import Loader from './components/UI/Loader/Loader';
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalCount, setTotalCount] = useState<string | number>(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAddSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        setTotalCount(response.headers['x-total-count'])
    })

    useEffect(() => {
        fetching()
    }, [])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const deletePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Add Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {error && <h1>Error message ${error}</h1>}
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: '50px'}}><Loader/></div>
                : <PostList posts={sortedAddSearchedPosts} title={'Posts about JS'} deletePost={deletePost}/>
            }

        </div>
    );
}

export default App;
