import {headings, temporalArticles} from './data'


const getArticleById =(id, data=null)=>{
    let art = {}

    if (data===null){
        art = temporalArticles.find(article => article.id == id)
    }else{
        art = data.items.find(article => article.id == id)
    }

    if(art !== undefined){
        return art
    }else{
        return {}
    }
}

const getArticlesByHeading =(head)=>{
    return temporalArticles.filter(art => art.heading == head)
}

const getHeadingNameById=(id)=>{
    let head = headings.find(h => h.id == id)
    if (head !== undefined){
        return head.name
    }else{
        return ''
    }
}

export {getArticleById,getArticlesByHeading, getHeadingNameById}