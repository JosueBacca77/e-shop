const infoStrings = {
    stockOut: 'Ha excedido el stock del producto'
}

const errorStrings = {
    pageNotFound: 'Página no encontrada',
    articleNotFound: 'Artículo no encontrado',
    headingNotFound: 'Rubro no encontrado',
    headingArticlesNotFound: 'No se han encontrado artículos pertenecientes a este rubro',
    insufficientStock: 'El stock de los siguientes productos es insuficiente para la cantidad solicitada',
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

export {infoStrings,articlesAdded,errorStrings}