import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { HOME } from '../../constants/routes'
import '../../styles/error-page.scss'

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleGetBackClick = () => {
        navigate(HOME)
    }

    return (
        <div className="error-page">
            <div className="error-container">
                <h1>Whoops... something went wrong!</h1>
                <p className="error-text">Sorry, an unexpected error has occurred.</p>
                <Button
                    className="get-back-btn"
                    onClick={handleGetBackClick}
                >
                    Get back to Home
                </Button>
            </div>
        </div>
    )
}

export default ErrorPage
