const infoStrings = {
    stockOut: 'The product is out of stock'
}

const pageName ='electronic-Shop'

const errorStrings = {
    pageNotFound: 'Page not found',
    articleNotFound: 'Product not found',
    purchaseNotFound: 'Purchase not found',
    headingArticlesNotFound: 'There are not product that belong to this heading',
    insufficientStock: 'The stock of the following products is not enough for the amount required',
    noMatchSearch: 'No match'
}

const purchaseStates = {
    generated: 'Generated'
}

const articlesAdded =(count,unit,pluralUnit)=>{
    if (count <= 0){
        return ""
    }
    if (count=="1"){
        return `You have added ${count} ${unit} to your cart!`
    }
    else{
        return `You have added ${count} ${pluralUnit} to your cart!`
    }
}

export {infoStrings,pageName,articlesAdded,errorStrings,purchaseStates}