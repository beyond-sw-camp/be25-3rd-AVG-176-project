<template>

  <div class="create-box">

    <h3>주문 생성</h3>

    <input v-model="customerName" placeholder="고객 이름"/>
    <input v-model="customerPhone" placeholder="전화번호"/>

    <input v-model="productName" placeholder="상품명"/>
    <input v-model="price" placeholder="가격"/>
    <input v-model="quantity" placeholder="수량"/>

    <input v-model="cardId" placeholder="카드ID"/>

    <button @click="create">
      주문 생성
    </button>

  </div>

</template>

<script>

import { createOrder } from "../api/orderApi"

export default{

  data(){

    return{

      customerName:"",
      customerPhone:"",
      productName:"",
      price:0,
      quantity:1,
      cardId:1

    }

  },

  methods:{

    async create(){

      const orderRequest={

        userId:1,

        customerName:this.customerName,
        customerPhone:this.customerPhone,

        cardId:this.cardId,

        items:[

          {

            productId:1,
            productName:this.productName,
            price:this.price,
            quantity:this.quantity

          }

        ]

      }

      await createOrder(orderRequest)

      alert("주문 생성 완료")

      this.$emit("reload")

    }

  }

}

</script>