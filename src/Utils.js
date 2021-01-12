const GetPlural =(unit)=> {
    switch (unit) {
        case "unidad": return  "unidades"
        case "par":  return "pares"
        case "metro": return  "metros"
        default : return ""
    }
}

const VerifyContains =(data,item)=>{
    console.log("very contains")
    console.log(data)
    console.log(data.find(act => act.id == item.id))
    if (data.find(act => act.id == item.id) !== undefined){
        console.log("dist undef")
        return true
    }else{
        console.log("igual undef")
        return false
    }
}

export {GetPlural, VerifyContains};