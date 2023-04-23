import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HOTSPOT_EDITOR, BLOG } from '../../constants/routes'
import HotspotEditor from '../HotspotEditor/hotspotEditor'
import Blog from '../Blog/blog'

import './style.scss'

const AppContent = () => {
    return (
        <div className="app-content">
            <Routes>
                <Route path={BLOG} element={<Blog />} />
                <Route path={HOTSPOT_EDITOR} element={<HotspotEditor />} />
            </Routes>
        </div>
    )
}

export default AppContent
