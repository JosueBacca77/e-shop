const GetPlural =(unit)=> {
    switch (unit) {
        case "unidad": return  "unidades"
        case "par":  return "pares"
        case "metro": return  "metros"
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

export {GetPlural, VerifyContains,Acumulator};