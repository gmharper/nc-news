import ArticleCard from './ArticleCard'

function Articles ( { articles, setArticles } ) {
    return ( 
        <div className='articles-container'>
            { articles.map((article) => {
                return ( <ArticleCard article={article}/>)
            } ) }
        </div>
    )
    
}

export default Articles