import React, {useEffect, useLayoutEffect, useState} from "react";
import ArticleDetail from "../ArticleDetail";
import {CircularIndeterminate} from "../../General/Progress/Progress";
import {useParams} from 'react-router-dom'
import {errorStrings} from "../../General/constants/strings";
import ErrorPage from "../../General/ErrorPage/ErrorPage";
import {getFireStore} from "../../../Data";
import { RouteParams } from "../../interfaces/RouteParams.interface";
import { ArticleInterface } from "../../interfaces/Article.interface";
import useGetArticlesById from "../../../Hooks/useGetArticlesById";


const ArticleDetailContainer =()=>{

    const {id} = useParams<RouteParams>();
    const {article, isLoading} = useGetArticlesById({id});

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (isLoading) {
        return <CircularIndeterminate />;
    }
    
    if (!article) {
        return <ErrorPage text={errorStrings.articleNotFound} />;
    }

    return(
        <div className="main-view">
            <ArticleDetail article={article} />
        </div>
    )
}

export default ArticleDetailContainer;