import {useMemo} from "react";
import {PostType} from "../components/PostList";

export const useSortedPosts = (posts: Array<PostType>, sort: string) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a: { [index: string]: any } = {}, b: { [index: string]: any } = {}) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts]);
}

export const usePosts = (posts: Array<PostType>, sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);
}