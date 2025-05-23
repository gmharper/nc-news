import { Link } from 'react-router';
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

// components
import Articles from './Articles'
import Users from './Users'

import { UserContext } from '../App'

function Home () {
    const { loggedInUser, isLoggedIn } = useContext(UserContext)

    const [articles, setArticles] = useState([])
    const [topics, setTopics] = useState([])
    const [activeTopic, setActiveTopic] = useState("coding")

    const setTopic = (topic) => {
        setActiveTopic(topic)
    }

    const getArticles = () => {
        let topicQuery = ""
        if (activeTopic === 'all') {
            topicQuery = ""
        } else if (activeTopic) {
            topicQuery = `topic=${activeTopic}`
        } else {
            topicQuery = ""
        }
        axios
        .get('https://nc-news-seedingproject.onrender.com/api/articles?'+topicQuery)
        .then((res) => {
            setArticles(res.data.articles)
        })
    }

    const getTopics = () => {
        axios
        .get('https://nc-news-seedingproject.onrender.com/api/topics')
        .then((res) => {
            setTopics(res.data.topics)
        })
    }

    useEffect(() => {
        getArticles()
        getTopics()
    }, [setArticles, setTopics, activeTopic])

    return (
        <>
            <div>Your Feed</div>
            <div>
                { isLoggedIn ? <></>
                : <p>Sign in to subscribe to topics or users</p>}
            </div>

            <div>
                <>Popular Topics </>
                <button onClick={() => {setActiveTopic('all')}}>All</button>
                { topics.map((topic) => { return ( 
                    <button onClick={() => {setActiveTopic(topic.slug)}}>{topic.slug}</button>)
                })}
            </div>

            <div>
            { isLoggedIn ? <>Subscribed Topics </> : <></> }
            { isLoggedIn ? topics.map((topic) => { return ( 
                <button onClick={() => { setActiveTopic(topic.slug) }}>{topic.slug}</button>)
                }) 
                : <></> }
            </div>

            <div className='grid-container'>
                <Articles articles={articles} setArticles={setArticles}/>
                <Users />
            </div>
        </>
    )
}

export default Home