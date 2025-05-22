import { useParams } from "react-router"
import axios from "axios"
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router'

function Article () {
    const params = useParams()
    const articleId = params.article_id

    const [articleInfo, setArticleInfo] = useState({})
    const [articleComments, setArticleComments] = useState([])

    function getArticle () {
        axios.get('https://nc-news-seedingproject.onrender.com/api/articles/'+articleId)
        .then((res) => {
            setArticleInfo(res.data.article)
        })
    }

    function getComments () {
        axios.get('https://nc-news-seedingproject.onrender.com/api/articles/'+articleId+'/comments')
        .then((res) => {
            setArticleComments(res.data.comments)
        })
    }

    useEffect(() => {
        getArticle()
        getComments()
    }, [setArticleInfo, setArticleComments])

    return (
    <> 
    <div>
        <img src={articleInfo.article_img_url} />
        <h2>{articleInfo.title}</h2>
        <p>{articleInfo.body}</p>
    </div>
    <div>
        { articleComments.map((comment) => {
            return (
            <div className='comment-box'>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
            </div>
            )
        })}
    </div>
    </>
    )
}

export default Article