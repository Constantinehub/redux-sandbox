import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HOTSPOT_EDITOR, DASHBOARD, BLOG } from '../constants/routes'
import HotspotEditor from './HotspotEditor/hotspotEditor'
import Dashboard from './Dashboard/dashboard'
import App from '../App'
import Blog from './Blog/blog'
import ErrorPage from './ErrorPage/ErrorPage'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: HOTSPOT_EDITOR,
                element: <HotspotEditor />,
            },
            {
                path: BLOG,
                element: <Blog />,
            },
            {
                path: DASHBOARD,
                element: <Dashboard />,
            }
        ]
    },
])

const RootRouter = () => {
    return (
        <RouterProvider router={routes} />
    )
}

export default RootRouter
