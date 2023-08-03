
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Home />),
    },
    {
        path: "/preview",
        element: <div>preview</div>,
    },
    {
        path: "/save",
        element: <div>Save</div>,

    }
    ,
    {
        path: "/test",
        element: <Test />,

    }
    , {
        path: "*",
        element: <div>404</div>,
    }
]);

export default router;