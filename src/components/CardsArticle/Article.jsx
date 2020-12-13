import React, {useState} from "react";
import CardArticle from "./CardArticle";


const Article =(article)=> {

    const [count, setCount] = useState(0);
    const [stockOut, setStockOut] = useState(false);

    const handleAdd =()=>{
        if (count < article.stock){
            setCount(count+1)
        }
        if (count === article.stock){
            setStockOut(true)
        }
    }

    const handleSubstract =()=>{
        if (count>0){
            setCount(count-1)
        }
        setStockOut(false)
    }

    return(
        <CardArticle
            article={article}
            count={count}
            stockOut={stockOut}
            add={handleAdd}
            substract={handleSubstract}
        />
    )
}

export default Article;