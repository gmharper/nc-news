import { Link } from 'react-router'

function ArticleCard ( { article } ) {
function test () {
    console.log("yes")
}

    return (
        <div onClick={test} className='article-card'>
            <Link to={"/articles/"+article.article_id}>
            <img src={article.article_img_url}/>
            <div className='article-card-box'>
                <p>{article.title}</p>
            </div>
            </Link>
        </div>
    )
}

export default ArticleCard