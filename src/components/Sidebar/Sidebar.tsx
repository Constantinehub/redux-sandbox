import React from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebarMenu } from '../../constants'
import { MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material'
import { SiReactivex } from 'react-icons/si'
import { useIntl } from 'react-intl'

import './style.scss'


const Sidebar = () => {
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const currentYear = new Date().getFullYear()

    const handleMenuClick = (route: string): void => {
        navigate(route)
    }

    const renderMenubar = () => {
        return (
            <MenuList className="sb-menu">
                {sidebarMenu.map((item, index) => {
                    const { name, destination, icon: MenuIcon } = item

                    return (
                        <MenuItem key={index} onClick={() => handleMenuClick(destination)}>
                            <ListItemIcon>
                                <MenuIcon className="sb-icon" fontSize="small" color="inherit" />
                            </ListItemIcon>
                            <ListItemText>{formatMessage({ id: name })}</ListItemText>
                        </MenuItem>
                    )
                })}
            </MenuList>
        )
    }

    return (
        <div className="sidebar">
            <div className="sb-content">
                <div className="sb-top">
                    <span className="sb-top-icon">
                        <SiReactivex color="crimson" size="3rem" />
                    </span>
                    <span className="sb-title">
                        <Typography variant="h1">React Sandbox</Typography>
                    </span>
                </div>
                <Divider light />
                <div className="sb-middle">
                    {renderMenubar()}
                </div>
                <div className="sb-bottom">
                    <Typography>
                        {`${formatMessage({ id: 'sidebar.copyright' })}: ${currentYear}`}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
