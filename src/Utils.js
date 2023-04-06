const GetPlural =(unit)=> {
    switch (unit) {
        case "unit": return  "units"
        case "pair":  return "pairs"
        case "meter": return  "meters"
        default : return ""
    }
}

const VerifyContains =(data,item)=>{
    if (data.find(act => act.id == item.id) !== undefined){
        return true
    }else{
        return false
    }
}

const Acumulator = (acc, obj)=> { return acc + obj.data.price * obj.count };

const GetFeeValue =(total,count) => {return (total/GetCountFeesValue(count)).toFixed(2)}

const GetCountFeesValue =(count) => {
    switch (count) {
        case "one":
            return 1
        case "three":
            return 3
        case "six":
            return 6
        case "nine":
            return 9
        case "twelve":
            return 12
        default:
            return 1
    }
}

const GetSubtotalItem=(item)=>{
    return(
        (item.count*item.data.price).toFixed(2)
    )
}

const getArticleAmountInCart =(data,articleId)=>{
    return data.find(article => article.id == articleId)?.count || 0;
}

const getDateFromTimestamp =(timestamp)=>{
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return(date.toLocaleDateString('en-US', options))
}

export {GetPlural, VerifyContains,Acumulator,GetFeeValue,GetCountFeesValue,GetSubtotalItem, getArticleAmountInCart, getDateFromTimestamp};