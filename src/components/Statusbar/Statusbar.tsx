import React from 'react'
import { IconButton, Button } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets'

import './statusbar.scss'

const Statusbar = () => {
    return (
        <div className="statusbar">
            <div className="status_left"></div>
            <div className="status_right">
                <Button
                    className=""
                    size="large"
                    color="secondary"
                    endIcon={
                        <WidgetsIcon fontSize="small" color="secondary" />
                    }
                >
                    Widgets
                </Button>
            </div>
        </div>
    )
}

export default Statusbar
