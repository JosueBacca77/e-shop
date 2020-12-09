import '../CardsArticle/CartdArticle.css'
import {temporalArticles} from "../../constants";
import CardArticle from "../CardsArticle/CardArticle";
import back from '../Images/back-ground.jpg';

const Home =()=> {
    return(
        <div className='container' style={{
            backgroundImage: `url(${`${back}`})`,
            backgroundSize: 'cover',
        }}>
            <div className='home'>
                <h1 className='subtitle'>Lo más buscado</h1>
                <div className='articles'>
                    {temporalArticles.map(article => (
                        <article>
                            {CardArticle(article.name, article.description, article.image)}
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
