import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import AllUsers from "../Page/AllUsers";
import AddUser from "../Page/AddUser";
import UpdateUserInfo from "../Page/UpdateUserInfo";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:8000/users'),
                Component: AllUsers,
                hydrateFallbackElement: <p>Loader...........</p>
            },
            {
                path: '/add-user',
                Component: AddUser
            },
            {
                path: '/update-user/:id',
                loader: ({params}) => fetch(`http://localhost:8000/users/${params.id}`),
                Component: UpdateUserInfo,
                hydrateFallbackElement: <p>Loader...........</p>
            }

        ]
    }
])
export default router;