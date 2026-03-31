<template>

<div class="card" :class="[card.cardType,{inactive:!card.active}]">

  <div class="card-top">
    {{card.cardType}}
  </div>

  <div class="card-number">
    {{formatCardNumber(card.cardNumber)}}
  </div>

  <div class="card-bottom">
    <span>{{card.expiry}}</span>
  </div>

  <!-- hover 버튼 -->
  <div class="card-overlay">

    <button @click.stop="toggle">
      {{card.active ? "비활성" : "활성"}}
    </button>

    <button class="delete" @click.stop="remove">
      삭제
    </button>

    <button @click.stop="detail">
      상세
    </button>

  </div>

</div>

</template>

<script>

import "../../assets/card.css"
import {toggleCard,deleteCard} from "../../api/cardApi.js"

export default{

  props:["card"],

  methods:{

    async toggle(){

      await toggleCard(this.card.id)

      this.$emit("refresh")

    },

    async remove(){

      if(confirm("카드를 삭제할까요?")){

        await deleteCard(this.card.id)

        this.$emit("refresh")

      }

    },

    detail(){

      this.$emit("detail",this.card.id)

    },


    formatCardNumber(num){

      if(!num) return ""

      return num.replace(/(\d{4})(?=\d)/g,"$1 ")

    }

  }

}

</script>