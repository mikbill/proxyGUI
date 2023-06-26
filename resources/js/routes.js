import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE} from "./utils/consts";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: NotFound
    },
]
