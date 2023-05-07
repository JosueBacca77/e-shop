import {errorStrings} from "../General/constants/strings";
import { ArticleInterface } from "../interfaces/Article.interface";
import { FirebaseDocumentInterface } from "../interfaces/FirebaseDocument.interface";

type ErrorStockTypes = {
    articles: FirebaseDocumentInterface<ArticleInterface>[]
}

const ErrorStock =({articles}:ErrorStockTypes)=>{

    return(
        <>
            <h1 className='subtitle'>
                {errorStrings.insufficientStock}
            </h1>
            <ul>
                {
                    articles.map(art=>(
                        <li key={art.id} >
                            <p className='error-item'>{art.data.name}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ErrorStock;