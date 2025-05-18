import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import AllUsers from "../Page/AllUsers";
import AddUser from "../Page/AddUser";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: AllUsers,
            },
            {
                path: '/add-user',
                Component: AddUser
            }
        ]
    }
])
export default router;