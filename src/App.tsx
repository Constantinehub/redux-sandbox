import React from 'react';
import AppContent from './routes/AppContent/AppContent'
import Sidebar from './components/Sidebar/Sidebar'
import Statusbar from './components/Statusbar/Statusbar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.scss'

const App = () => {
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    })

    return (
        <ThemeProvider theme={lightTheme}>
            <div className="app">
                <div className="app-container">
                    <Sidebar />
                    <div className="content">
                        <Statusbar />
                        <AppContent />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App;
