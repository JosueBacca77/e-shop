import './Article.css'
import back from "../components/Images/back-ground.jpg";
import React, {useState} from "react";
import GetPlural from "../Utils";
import Button from "@material-ui/core/Button";

const ArticleDetail =(article)=> {

    const [selectedImage, setSelectedImage] = useState(article.article.images[0])
    const handleChangeImage =(image)=> {
        setSelectedImage(image)
    }

    return(
        <div
            //className={articles.length>0?null:'container'}
            className='container'
            style={{
                backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='home'>
                    <>
                        <article className='article'>
                            <div className='info'>
                                <section className='images'>
                                    <ul>
                                        {article.article.images.length >0
                                            ?
                                            article.article.images.map(ima => (
                                                <li>
                                                    <img className={selectedImage==ima
                                                        ?'selectedImage':'image'}
                                                         src={ima} alt='hola'
                                                         onClick={()=>handleChangeImage(ima)}
                                                    />
                                                </li>
                                            ))
                                            :null}
                                    </ul>
                                </section>
                                <section className='mainimage'>
                                    <img
                                        src={selectedImage}
                                        alt='hola'
                                        className='mainimage'/>
                                </section>
                                <section className='detailArticle'>
                                    <h1 className='articleName'>
                                        {article.article.name}
                                    </h1>
                                    <div className='price'>
                                        <h2>{`$ ${article.article.price}`}</h2>
                                        <span>{`c/${article.article.unit}`}</span>
                                    </div>
                                    <p>
                                        {article.article.description}
                                    </p>
                                    <div className='price'>
                                        <p>Stock disponible:</p>
                                        <span style={{'fontWeight':'bold'}}>{`${article.article.stock} ${GetPlural(article.article.unit)}`}</span>
                                    </div>
                                    <br/>

                                    <div className='addcart' >
                                        <Button variant="outlined" color="primary">
                                            Agregar al carrito
                                        </Button>
                                    </div>

                                </section>
                            </div>
                        </article>
                    </>
            </div>
        </div>
    )
}

export default ArticleDetail;