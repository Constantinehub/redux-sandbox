import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { HOME } from '../../constants/routes'
import Home from '@mui/icons-material/Home'

import './style.scss'

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleGetBackClick = () => {
        navigate(HOME)
    }

    return (
        <div className="nf-page">
            <div className="nf-container">
                <div className="nf-main">
                    <h1>404</h1>
                </div>
                <div className="nf-content">
                    <p className="nf-primary-text">Whoops... looks like you're lost.</p>
                    <p className="nf-secondary-text">The page you are looking for not available!</p>
                    <Button
                        color="primary"
                        variant="contained"
                        className="get-back-btn"
                        startIcon={<Home />}
                        onClick={handleGetBackClick}
                    >
                        Get back to Home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
