import React, {useState} from "react";
import CardArticle from "./CardArticle";



const Article =(article)=> {

    const [count, setCount] = useState(0);

    const handleAdd =()=>{
        if (count < article.stock){
            setCount(count+1)
        }
    }

    const handleSubstract =()=>{
        if (count>0){
            setCount(count-1)
        }
    }

    return(
        <CardArticle
            article={article}
            count={count}
            add={handleAdd}
            substract={handleSubstract}
        />
    )
}

export default Article;