export type Tproduct={
    id:number,
    name:string,
    price:number,
    quantity:number,
    image:string
    
}
export type Tstate={
    items:Tproduct[]
    totalPrice:number,
    totalQuantity:number,
}