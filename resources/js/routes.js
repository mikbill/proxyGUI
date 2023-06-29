import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE, PROFILE_ROUTE} from "./utils/consts";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
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
