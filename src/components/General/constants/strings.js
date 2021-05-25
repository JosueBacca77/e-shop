const infoStrings = {
    stockOut: 'Ha agotado el stock del producto'
}

const pageName ='electronic-Shop'

const errorStrings = {
    pageNotFound: 'Página no encontrada',
    articleNotFound: 'Artículo no encontrado',
    purchaseNotFound: 'Compra no encontrada',
    headingArticlesNotFound: 'No se han encontrado artículos pertenecientes a este rubro',
    insufficientStock: 'El stock de los siguientes productos es insuficiente para la cantidad solicitada',
    noMatchSearch: 'No hay coincidencias en la búsqueda'
}

const purchaseStates = {
    generated: 'Generada'
}

const articlesAdded =(count,unit,pluralUnit)=>{
    if (count <= 0){
        return ""
    }
    if (count=="1"){
        return `Ha agregado ${count} ${unit} al carrito!`
    }
    else{
        return `Ha agregado ${count} ${pluralUnit} al carrito!`
    }
}

export {infoStrings,pageName,articlesAdded,errorStrings,purchaseStates}