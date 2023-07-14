import {CREATE_USER_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE, REQUESTS_ROUTE, USERS_ROUTE} from "./utils/consts";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Request from "./pages/Request";
import Users from "./pages/Users";
import EditUserPage from "./pages/EditUserPage";
import CreateUser from "./pages/CreateUser";

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
        Component: EditUserPage
    },
    {
        path: CREATE_USER_ROUTE,
        Component: CreateUser
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
