import React, {useEffect, useState} from 'react';
import '../styles/App.css'
import PostList, {PostType} from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/Modal/MyModal";
import MyButton from "../components/UI/Button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../api/PostService";
import Loader from '../components/UI/Loader/Loader';
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState<string | number>(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAddSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetching, isLoading, error] = useFetching(async (limit: number, page: number) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetching(limit, page)
    }, [])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const deletePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page: number) => {
        setPage(page)
        fetching(limit, page)
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
            <Pagination totalPages={totalPages} changePage={changePage} page={page}/>
        </div>
    );
}

export default Posts;
