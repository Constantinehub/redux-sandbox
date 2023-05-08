export const getLocalStorageData = (key: string) => {
    return window.localStorage.getItem(key)
}

export const setLocalStorageData = (key: string, data: string) => {
    window.localStorage.setItem(key, data)
}
