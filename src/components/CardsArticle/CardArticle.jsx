import {useContext} from "react";
import {getArticleAmountInCart, GetPlural, VerifyContains} from "../../Utils";
import {useHistory} from "react-router-dom";
import {Store} from "../../Store";
import {AddItemToCart, UpdateTotalCart} from "../../Store/ManageContext";
import {useAuth} from "../../AuthContext";
import "./CardsArticle.css"


const CardArticle =({article})=> {

    const [data, setData] = useContext(Store)
    const {currentUser} = useAuth()

    let history = useHistory();

    const goDetail =()=> {
        history.push("/detail/"+article.id)
    }

    const goCart =()=> {
        history.push("/cart")
    }

    const handleAddCart =()=>{
        if (currentUser){
            AddItemToCart(article, 1, data, setData)
            //actualizo total carrito
            UpdateTotalCart(data,setData)
        }else{
            history.push("/login")
        }
    }

    return(
        <div className="card-wrapper">
            <div className="card card-article front-article-card">
                <img src={`/Images/${article.data.images[0]}`}/>
                <div className="card-description">
                    <h2>{article.data.name}</h2>
                    <p>{article.data.description}</p>
                </div>
                
            </div>
            <div className="card card-article back-article-card">
                <h2>$ {article.data.price}</h2>
                <div className="article-options">
                    {
                        VerifyContains(data.items,article)?
                        <span className="amount-in-cart" onClick={goCart}>
                            {`${getArticleAmountInCart(data.items, article.id)} ${getArticleAmountInCart(data.items, article.id) === 1 ? article.data.unit: GetPlural(article.data.unit)} in your cart`}
                        </span>
                        :
                        <>
                            <button className={article.data.stock <= 0?'disabled':'add-to-card'} disabled={article.data.stock <= 0} onClick={handleAddCart}>Agregar al carrito</button>
                            <span className="without-stock">
                                {
                                    article.data.stock <= 0
                                    ?
                                        "Agotado"
                                    :
                                    null
                                }
                            </span>
                        </>
                    }
                    <span className="underline-when-hover view-detail" onClick={goDetail}>
                        Ver detalle
                    </span>
                </div>

            </div>
        </div>
    )
}
export default CardArticle;