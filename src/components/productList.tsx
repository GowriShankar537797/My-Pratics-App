import React from 'react'

export const productList=()=>{
    let product=[]
    for(let i=0;i<=10000;i++){   
            product.push(`product ${i}`)
    }
    return product;
}