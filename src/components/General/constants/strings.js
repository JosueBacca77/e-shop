const infoStrings = {
    stockOut: 'Ha excedido el stock del producto'
}

const errorStrings = {
    pageNotFound: 'Página no encontrada',
    articleNotFound: 'Artículo no encontrado',
    headingNotFound: 'Rubro no encontrado',
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