function placeOrder(orderNo){
    console.log(`Custumer Order ${orderNo}`)
    cookFood(function (){
        console.log(`Delivered ${orderNo}`)
    })
}


function cookFood(callBack){
    setTimeout(callBack, 5000)
}


placeOrder(1)
placeOrder(2)
placeOrder(3)
placeOrder(4)