import CardArticle from "./CardsArticle/CardArticle";


const ArticleList =({articles,title})=>{

    return(
        <>
            <div className='articles'>
                {articles.map(article => (
                    <article key={article.id}>
                        {<CardArticle
                            article={article}
                        />}
                    </article>
                ))}
            </div>
        </>
    )
}

export default ArticleList;