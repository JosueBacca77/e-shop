import {useContext, useState} from "react";
import {VerifyContains} from "../../Utils";
import {useHistory} from "react-router-dom";
import {Store} from "../../Store";
import {AddItemToCart, ModifyCountItem, UpdateTotalCart} from "../../Store/ManageContext";
import {useAuth} from "../../AuthContext";
import "./CardsArticle.css"


const CardArticle =({article})=> {

    const [count, setCount] = useState(0)
    const [added, setAdded] = useState(false)
    const [data, setData] = useContext(Store)
    const {currentUser} = useAuth()

    let history = useHistory();

    const goDetail =()=> {
        history.push("/detail/"+article.id)
    }

    const handleAddCart =()=>{
        if (currentUser){
            if(count>0 && count <= article.data.stock ) {
                setAdded(true)
                //si esta en el cart sumo unidades
                if (VerifyContains(data.items,article)){
                    //si esta sumo las unidades
                    ModifyCountItem(article.id, count,data,setData)
                    //actualizo total carrito
                    UpdateTotalCart(data,setData)
                }else{
                    //si no esta lo sumo al cart
                    AddItemToCart(article,count,data,setData)
                    //actualizo total carrito
                    UpdateTotalCart(data,setData)
                }
            }
        }
        history.push("/cart")
    }

    return(
        <div className="card-wrapper">
            <div className="card-article front-article-card">
                <img src={`/Images/${article.data.images[0]}`}/>
                <div className="card-description">
                    <h2>{article.data.name}</h2>
                    <p>{article.data.description}</p>
                </div>
                
            </div>
            <div className="card-article back-article-card">
                <h2>$ {article.data.price}</h2>
                <div className={article.data.stock <= 0?'disabled':'add-to-card'}>Agregar al carrito</div>
                <span className="without-stock">
                    {
                        article.data.stock <= 0
                        ?
                            "Agotado"
                        :
                        null
                    }
                </span>
                
            </div>

        </div>
        // <>
        // <Card className={classes.root} >
        //     <CardActionArea onClick={goDetail}>
        //         <CardMedia
        //             className={classes.media}
        //             image={`/Images/${article.data.images[0]}`}
        //             title={article.data.name}
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="h2" className={classes.stopButton} >
        //                 {article.data.name}
        //             </Typography>

        //             <div className={classes.price}>
        //                 <Typography variant="h5" className={classes.price} >
        //                     {`$ ${article.data.price} `}
        //                 </Typography>
        //                 {
        //                     article.data.stock <= 0
        //                         ?
        //                         <div >
        //                             <span className={classes.without}>SIN STOCK</span>
        //                         </div>
        //                         :
        //                         null
        //                 }
        //             </div>

        //         </CardContent>
        //     </CardActionArea>
        //     <CardActions className={classes.actions} >
        //         <>
        //             <Counter
        //                 limit={article.data.stock}
        //                 count={count}
        //                 setCount={setCount}
        //                 disabled={article.data.stock<=0}
        //             />
        //             <div>
        //                 <IconButton
        //                             className={classes.actionToCart}
        //                             onClick={handleAddCart}
        //                             disabled={article.data.stock<=0}
        //                 >
        //                     <AddShoppingCartIcon
        //                         className={article.data.stock<=0?classes.iconDiabled:classes.icon}
        //                         disabled={article.data.stock<=0}
        //                     />
        //                 </IconButton>
        //             </div>
        //         </>
        //     </CardActions>
        //     {count===article.data.stock && article.data.stock>0 && !added
        //         ?
        //         <ErrorLabel
        //             text={infoStrings.stockOut}
        //         />
        //         :null}
        // </Card>
        // </>
    )
}
export default CardArticle;