import React, { useState, useEffect } from 'react'
import { MenuItem, FormControl, InputLabel } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useIntl } from 'react-intl'
import { getLocalStorageData, setLocalStorageData } from '../../services/LocaleStorageService'
import { langList, DEFAULT_LOCALE } from '../../constants'

import './style.scss'

const LocalePicker = () => {
    const [lang, setLang] = useState<string>(DEFAULT_LOCALE)
    const { formatMessage } = useIntl()
    const currentLocale = getLocalStorageData('lang')

    useEffect(() => {
        if (currentLocale) {
            setLang(currentLocale)
        }
    }, [])

    const handleLangChange = ({ target: { value }}: SelectChangeEvent) => {
        setLang(value)
        setLocalStorageData('lang', value)
        window.location.reload()
    }

    return (
        <div className="lang-selector">
            <FormControl fullWidth color="secondary">
                <InputLabel>{formatMessage({ id: 'common.language' })}</InputLabel>
                <Select
                    label={formatMessage({ id: 'common.language' })}
                    value={lang}
                    onChange={handleLangChange}
                    variant="standard"
                >
                    {langList.map((lang: string, idx: number) => (
                        <MenuItem key={idx} value={lang}>{lang}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default LocalePicker
