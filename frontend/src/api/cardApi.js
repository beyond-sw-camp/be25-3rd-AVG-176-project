const BASE_URL = "http://localhost:8080/cards"

export async function getCards() {

    const res = await fetch(BASE_URL)
    return res.json()

}

export async function createCard(card){

    const response = await fetch(BASE_URL,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            cardType: card.cardType,
            cardNumber: card.cardNumber,
            balance: card.balance,
            cardLimit: card.cardLimit,
            cvc: card.cvc,
            expiry: card.expiry
        })

    })

    return response.json()

}

export async function toggleCard(id){

    await fetch(`${BASE_URL}/${id}/toggle`,{
        method:"PATCH"
    })

}

export async function deleteCard(id){

    await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE"
    })
}

export async function getCardDetail(id){
    const res = await fetch(`${BASE_URL}/${id}/decrypt`)
    return res.json()
}

