const BASE_URL = "http://localhost:8080/orders"

export async function getOrderManagement(){

    const res = await fetch(`${BASE_URL}/management`)

    return await res.json()

}

export async function createOrder(orderRequest){

    const res = await fetch(BASE_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(orderRequest)
    })

    return await res.json()

}

export async function cancelOrder(orderId){

    const res = await fetch(`${BASE_URL}/${orderId}/cancel`,{
        method:"PATCH"
    })

    return await res.json()

}

export async function getFailedOrders(){

    const res = await fetch(`${BASE_URL}/failed`)

    return await res.json()

}

export async function getUserOrders(userId){

    const res = await fetch(`${BASE_URL}/user/${userId}`)

    return await res.json()

}