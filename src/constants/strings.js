const infoStrings = {
    stockOut: 'Ha excedido el stock del producto'
}

const articlesAdded =(count,unit,pluralUnit)=>{
    if (count <= 0){
        return ""
    }
    if (count=="1"){
        console.log("es 1")
        console.log(unit)
        return `Ha agregado ${count} ${unit} al carrito!`
    }
    else{
        return `Ha agregado ${count} ${pluralUnit} al carrito!`
    }
}

export {infoStrings,articlesAdded}