import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import RootRouter from './routes/root'
import reportWebVitals from './reportWebVitals'
import { IntlProvider } from 'react-intl'
import { getLocalStorageData } from './services/LocaleStorageService'
import English from './i18n/lang/en.json'
import Spanish from './i18n/lang/es.json'
import { DEFAULT_LOCALE, EN, ES } from './constants'

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const currentLocale = getLocalStorageData('lang')

if (!currentLocale) {
    window.localStorage.setItem('lang', DEFAULT_LOCALE)
}

const locale = currentLocale || DEFAULT_LOCALE

const languages: any = {
    [EN]: English,
    [ES]: Spanish,
}

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <IntlProvider locale={locale} messages={languages[locale]}>
              <RootRouter />
          </IntlProvider>
      </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
