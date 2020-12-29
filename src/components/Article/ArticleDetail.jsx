import './ArticleDetail.css'
import back from "../Images/back-ground.jpg";
import React, {useState} from "react";
import GetPlural from "../../Utils";
import TextField from "@material-ui/core/TextField";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CorrectLabel, ErrorLabel} from "../../components/Labels";
import {articlesAdded, infoStrings} from "../../constants/strings";
import DeleteIcon from "@material-ui/icons/Delete";


const ArticleDetail =({article})=> {

    const [selectedImage, setSelectedImage] = useState(article.images[0])

    const [added, setAdded] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const handleChangeImage =(image)=> {
        setSelectedImage(image)
    }

    const handleAddCart =()=> {
        if(countAdded>0 && countAdded <= article.stock ){
            setAdded(true)
        }
    }

    const handleChangeCount =(e)=> {
        setCountAdded(e.target.value)
    }

    const handleDelete =()=>{
        setCountAdded(0)
        setAdded(false)
    }

    const useStyles = makeStyles({
        icon:{
            color: "blue"
        },
        cancelIcon:{
            color: "red"
        },
        actionToCart:{
            float: "right",
        },
    });

    const classes = useStyles();

    return(
        <div
            className='container'
            style={{
                backgroundImage: `url(${`${back}`})`,
        }}>
            <article className='article'>
                <div className='info'>
                    <section className='images'>
                        <ul>
                            {article.images.length >0
                                ?
                                article.images.map(ima => (
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
                    <section >
                        <img
                            src={selectedImage}
                            alt='hola'
                            className='mainimage'/>
                    </section>
                    <section className='detailArticle'>
                        <h1 className='articleName'>
                            {article.name}
                        </h1>
                        <div className='price'>
                            <h2>{`$ ${article.price}`}</h2>
                            <span>{`c/${article.unit}`}</span>
                        </div>
                        <p>
                            {article.description}
                        </p>
                        <div className='price'>
                            <p>Stock disponible:</p>
                            <span style={{'fontWeight':'bold'}}>{`${article.stock} ${GetPlural(article.unit)}`}</span>
                        </div>
                        <br/>

                        <div className='addcart' >
                            {!added
                                ?
                                <>
                                    <TextField
                                        type='number'
                                        variant="outlined"
                                        margin="normal"
                                        label={`${GetPlural(article.unit)} a agregar al carrito`}
                                        autoFocus
                                        onChange={handleChangeCount}
                                    />

                                    <IconButton color="inherit" className={classes.actionToCart}>
                                        <AddShoppingCartIcon className={classes.icon} onClick={handleAddCart}/>
                                    </IconButton>
                                </>
                                :null
                            }
                            {
                                added
                                    ?
                                    <>
                                        <CorrectLabel
                                            text={
                                                articlesAdded(countAdded,article.unit,GetPlural(article.unit))
                                            }
                                        />

                                        <IconButton color="inherit" className={classes.actionToCart}>
                                            <DeleteIcon className={classes.cancelIcon} onClick={handleDelete}/>
                                        </IconButton>
                                    </>
                                    :null
                            }
                        </div>
                        {countAdded>article.stock && !added
                            ?
                            <ErrorLabel
                                text={infoStrings.stockOut}
                            />
                            :null}
                    </section>
                </div>
            </article>

        </div>
    )
}

export default ArticleDetail;