

import { FirebaseDocumentInterface } from "./FirebaseDocument.interface";
import {ArticleInterface} from "./Article.interface"


export interface CartArticleInterface extends FirebaseDocumentInterface<ArticleInterface> {
    count?: number
}