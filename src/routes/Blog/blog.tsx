import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsData } from '../../redux/actions/actionCreator'
import Searchbar from '../../components/Searchbar/Searchbar'
import Card from '../../components/Card/Card'

import './style.scss'

const Blog = () => {
    const [query, setQuery] = useState<string>('')
    const [articles, setArticles] = useState([])
    const dispatch = useDispatch()
    const { news: { popularNews } } = useSelector((store: any) => store)

    // useEffect(() => {
    //     dispatch(getNewsData(query))
    // }, [query])

    const onSearchChange = (value: string) => {
        setQuery(value)
    }

    const onSearchSubmit = (value: string) => {
        dispatch(getNewsData(value))
    }

    useEffect(() => {
        console.log('blog_newsArr ', popularNews)
        setArticles(popularNews.slice(0, 10))
    }, [popularNews])

    return (
        <div className="blog">
            <div className="blog-searchbar">
                <Card wrapper title={'Search'}>
                    <Searchbar
                        onChange={onSearchChange}
                        onSubmit={onSearchSubmit}
                    />
                </Card>
                <div className="articles-container">
                    {articles.map((item: any, index) => {
                        return (
                            <div key={index} className="blog-item">
                                <h6 key={index}>{`Item - ${index + 1}`}</h6>
                                <p>{item.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog
