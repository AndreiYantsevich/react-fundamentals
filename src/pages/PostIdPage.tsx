import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState<any>({})
    const [comments, setComments] = useState<any>([])
    const [fetchPostById, isLoading, error] = useFetching(async (id: number) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentLoading, errorComment] = useFetching(async (id: number) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>You opened the post page with ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    {comments.map((c: any) =>
                        <div style={{marginTop: 15}}>
                            <h5>{c.email}</h5>
                            <div>{c.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;