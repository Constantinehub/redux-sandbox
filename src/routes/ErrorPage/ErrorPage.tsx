import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Button } from '@mui/material'
import { HOME } from '../../constants/routes'
import Home from '@mui/icons-material/Home'

import './style.scss'

const ErrorPage = () => {
    const navigate = useNavigate()
    const { formatMessage } = useIntl()

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
                    <p className="nf-primary-text">{formatMessage({ id: 'notFound.title' })}</p>
                    <p className="nf-secondary-text">{formatMessage({ id: 'notFound.text' })}</p>
                    <Button
                        color="primary"
                        variant="contained"
                        className="get-back-btn"
                        startIcon={<Home />}
                        onClick={handleGetBackClick}
                    >
                        {formatMessage({ id: 'notFound.getBackToHome' })}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
