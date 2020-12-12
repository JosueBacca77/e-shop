import '../CardsArticle/CartdArticle.css'
import Article from "../CardsArticle/Article";
import back from '../Images/back-ground.jpg';

const Home =({articles})=> {
    return(
        <div className='container' style={{
            backgroundImage: `url(${`${back}`})`,
            backgroundSize: 'cover',
        }}>
            <div className='home'>
                <h1 className='subtitle'>Lo más buscado</h1>
                <div className='articles'>
                    {articles.map(article => (
                        <article>
                            {Article(article)}
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
