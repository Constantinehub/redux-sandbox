import axios from 'axios'

const baseURL = ''

export const apiKey = '91371297cd3c4876880919e514355226'

const axiosAPI = axios.create({
    baseURL: 'https://newsapi.org/v2',
})

axios.interceptors.request.use((config) => config)

axiosAPI.interceptors.request.use(
    (response) => response,
    (error) => Promise.resolve(error),
)

export async function get(url: string, config?: any) {
    const { params = {}, ...restConfig } = config
    return await axiosAPI
        .get(url, {
            ...restConfig,
            params: {
                ...params,
                apiKey,
            }
        })
        .then((response) => {
            console.log('response ', response.data)
            return response.data
        })
}
