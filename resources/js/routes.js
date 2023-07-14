import {LOGIN_ROUTE, NOT_FOUND_ROUTE, REQUESTS_ROUTE, USERS_ROUTE} from "./utils/consts";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Request from "./pages/Request";
import Users from "./pages/Users";
import UserPage from "./pages/UserPage";

export const authRoutes = [
    {
        path: REQUESTS_ROUTE,
        Component: Request
    },
    {
        path: USERS_ROUTE,
        Component: Users
    },
    {
        path: USERS_ROUTE + '/:id',
        Component: UserPage
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: NotFound
    },
]
