import PrivateRouter from "../components/route/private-router"
import PublicRouter from "../components/route/public-router"
import HomePage from "../pages/home.page"
import LoginPage from "../pages/login.page"
import RegisterPage from "../pages/register.page"
import { urls } from "./urls.config"

const privateRoutes = [
    {
        path: urls.HOME,
        element: <HomePage />
    }
].map(route => ({ path: route.path, element: <PrivateRouter>{route.element}</PrivateRouter> }))

const testRoutes = [1, 2, 3, 4].map((route) => ({ path: route === 1 ? '/' : `/path-${route}`, element: <PrivateRouter><h1>path-{route}</h1></PrivateRouter> }))

const publicRoutes = [
    {
        path: urls.LOGIN,
        element: <LoginPage />
    },
    {
        path: urls.REGISTER,
        element: <RegisterPage />
    }
].map(route => ({ path: route.path, element: <PublicRouter>{route.element}</PublicRouter> }))

export const router = [
    ...privateRoutes,
    ...publicRoutes,
    ...testRoutes,
    ...[{
        path: '*',
        element: <p>404 | NOT Found</p>
    }]
]