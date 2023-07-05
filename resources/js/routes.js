import {LOGIN_ROUTE, NOT_FOUND_ROUTE, REQUEST_ROUTE, USERS_ROUTE} from "./utils/consts";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Request from "./pages/Request";
import Users from "./pages/Users";

export const authRoutes = [
    {
        path: REQUEST_ROUTE,
        Component: Request
    },
    {
        path: USERS_ROUTE,
        Component: Users
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
