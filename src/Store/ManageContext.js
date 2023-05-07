import {Acumulator} from "../Utils";

const initialStore ={
    items: [],
    total: 0
}


const ModifyCountItem=(id,count,data,set)=>{
    set({...data,
        'items':  data.items.map(art => {
            if (art.id == id) {
                art.count = parseInt(art.count) + parseInt(count)
            }
        })
    })
}

const UpdateTotalCart=(data,set)=>{
    set(
        {...data,'total':data.items.reduce(Acumulator,0).toFixed(2)}
    )
}

const AddItemToCart=(article,count,data,set)=>{
    set(data.items.push({...article,'count':parseInt(count)}))
}

const ReplaceItemCart=(id,count,data,set)=>{
    set(
        {
            'items':data.items= data.items.map(art => {

                if (art.id == id) {
                    return  {...art,'count':parseInt(count)}
                    //art.count = parseInt(art.count) + parseInt(countAdded)
                }else{
                    return {...art}
                }
            })
        }
    )
}

const DeleteItemCart =(id,data,set)=>{
    set(
        {...data,
            'items':data.items=
                data.items.filter((it)=>{
                    return it.id !== id;
                })
        })
}

const ClearCart =(set)=>{
    set(initialStore)
}



export {initialStore,ModifyCountItem,UpdateTotalCart,AddItemToCart,ReplaceItemCart,DeleteItemCart,ClearCart}