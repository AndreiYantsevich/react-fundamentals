import React from "react";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export enum RouteNames {
    ABOUT = '/about',
    ERROR = '/error',
    POST_ID_PAGE = '/posts/:id',
    POSTS = '/posts',
    LOGIN = '/login',
}

export type RouteType = {
    path: string,
    element: React.ComponentType;
}

export const privateRoutes: RouteType[] = [
    {path: RouteNames.ABOUT, element: About},
    {path: RouteNames.ERROR, element: Error},
    {path: RouteNames.POST_ID_PAGE, element: PostIdPage},
    {path: RouteNames.POSTS, element: Posts},
]
export const publicRoutes: RouteType[] = [
    {path: RouteNames.LOGIN, element: Login},
]