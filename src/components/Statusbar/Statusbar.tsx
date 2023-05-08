import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, ListItemIcon, Button } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets'
import { useIntl } from 'react-intl'
import { statusbarMenu } from '../../constants'

import './style.scss'

const Statusbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLAnchorElement>(null)
    const { formatMessage } = useIntl()
    const navigate = useNavigate()
    const isMenuOpen = Boolean(anchorEl)

    const handleMenuClick = (event: any): void => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = (): void => {
        setAnchorEl(null)
    }

    const renderMenuItems = () => {
        return statusbarMenu.map((item, index) => {
            const { destination, name, icon: Icon } = item
            const handleMenuItemClick = (): void => {
                navigate(destination)
            }

            return (
                <MenuItem
                    key={index}
                    disabled
                    onClick={handleMenuItemClick}
                >
                    <ListItemIcon>
                        <Icon fontSize="small" />
                    </ListItemIcon>
                    {formatMessage({ id: name })}
                </MenuItem>
            )
        })
    }

    return (
        <div className="statusbar">
            <div className="status_left"></div>
            <div className="status_right">
                <Button
                    className=""
                    size="large"
                    color="secondary"
                    onClick={handleMenuClick}
                    endIcon={
                        <WidgetsIcon fontSize="small" color="secondary" />
                    }
                >
                    {formatMessage({ id: 'common.menu' })}
                </Button>
                <Menu
                    open={isMenuOpen}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                >
                    {renderMenuItems()}
                </Menu>
            </div>
        </div>
    )
}

export default Statusbar
