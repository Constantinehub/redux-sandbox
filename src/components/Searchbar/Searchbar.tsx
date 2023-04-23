import React, { useState, useEffect, useMemo } from 'react'
import { debounce } from 'lodash'
import { TextField, IconButton, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

import './style.scss'

type SearchbarProps = {
    onChange: (value: string) => void,
    onSubmit?: (query: string) => void,
}

const Searchbar = (props: SearchbarProps) => {
    const { onChange, onSubmit } = props
    const [searchQuery, setSearchQuery] = useState<string>('')

    const handleSearchChange = ({ target: { value }}: any) => {
        setSearchQuery(value)
        delayedChangeQuery(value)
    }

    const handleSearchClear = () => {
        setSearchQuery('')
        onChange('')
    }

    const handleSearchSubmit = () => {
        if (onSubmit) {
            onSubmit(searchQuery)
        }
    }

    const delayedChangeQuery = useMemo(
        () => debounce(query => onChange(query), 500)
    , [])

    useEffect(() => {
        return () => {
            delayedChangeQuery.cancel()
        }
    }, [])

    return (
        <div className="searchbar">
            <TextField
                id="searchbar"
                className="search-field"
                label="Type your request..."
                value={searchQuery}
                onChange={handleSearchChange}
                // variant="standard"
                InputProps={{
                    ...(searchQuery.length && {
                        endAdornment: (
                            <IconButton size="small" onClick={handleSearchClear}>
                                <ClearIcon fontSize="small" color="inherit" />
                            </IconButton>
                        )
                    })
                }}
            />
            <Button
                className="search-button"
                variant="contained"
                onClick={handleSearchSubmit}
            >
                <SearchIcon />
            </Button>
        </div>
    )
}

export default Searchbar
