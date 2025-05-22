import ArticleCard from './ArticleCard'

function Articles ( { articles, setArticles } ) {
    return ( 
        <>
            { articles.map((article) => {
                return ( 
                <div>
                    <ArticleCard article={article}/>
                </div>)
            } ) }
        </>
    )
    
}

export default Articles