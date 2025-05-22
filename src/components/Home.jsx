import { Link } from 'react-router';
import { useState, useEffect } from 'react'
import axios from 'axios'

// components
import Articles from './Articles'

let url = 'https://nc-news-seedingproject.onrender.com/'
function Home () {
    const [articles, setArticles] = useState([])
    const [topics, setTopics] = useState([])

    const getArticles = () => {
        axios
        .get('https://nc-news-seedingproject.onrender.com/api/articles')
        .then((res) => {
            setArticles(res.data.articles)
        })
    }

    const getTopics = () => {
        axios
        .get('https://nc-news-seedingproject.onrender.com/api/topics')
        .then((res) => {
            console.log(res.data)
            setTopics(res.data.topics)
        })
    }

    useEffect(() => {
        getArticles()
        getTopics()
    }, [setArticles, setTopics])

    return (
        <>
        <div>
            <>Search By: </>
            { topics.map((topic) => {
                return ( <Link to='/articles'><i>{topic.slug} | </i>  </Link>)
            })}
        </div>
        <div className='box'>
            <Articles articles={articles} setArticles={setArticles}/>
        </div>
        </>
    )
}

export default Home