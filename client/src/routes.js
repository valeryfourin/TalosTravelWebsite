import Account from "./pages/Account"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Offers from "./pages/Offers"
import { ACCOUNT_ROUTE, ADMIN_ROUTE, OFFERS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    }
]

export const publicRoutes = [
    {
        path: OFFERS_ROUTE,
        Component: Offers
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]