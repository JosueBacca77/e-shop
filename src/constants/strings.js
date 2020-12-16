const infoStrings = {
    stockOut: 'Ha agotado el stock del producto'
}

const articlesAdded =(count)=>{
    if (count <= 0){
        return ""
    }
    if (count===1){
        return `Ha agregado ${count} unidad al carrito!`
    }
    else{
        return `Ha agregado ${count} unidades al carrito!`
    }
}

export {infoStrings,articlesAdded}