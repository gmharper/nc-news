import { Link } from 'react-router'

function ArticleCard ( { article } ) {
    return (
        <div className='article-card'>
            <Link to={"/articles/"+article.article_id}>
            <img src={article.article_img_url}/>
            <div className='article-card-box'>
                <p>{article.title} | {article.topic} | {article.author} | {article.created_at}</p>
            </div>
            </Link>
        </div>
    )
}

export default ArticleCard