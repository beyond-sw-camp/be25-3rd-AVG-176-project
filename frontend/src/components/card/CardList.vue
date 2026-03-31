<template>

  <div>

    <h2>판매자 카드 관리</h2>

    <button @click="showAdd=true">
      카드 추가
    </button>

    <div class="card-container">

      <CardItem
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @refresh="loadCards"
          @detail="openDetail"
      />

    </div>


    <!-- 카드 추가 -->

    <div v-if="showAdd" class="modal">

      <div class="modal-box">

        <h3>카드 등록</h3>

        <!-- <input v-model="newCard.cardType" placeholder="카드사"> -->
        <select v-model="newCard.cardType">

          <option disabled value="">
            카드사를 선택하세요
          </option>

          <option value="VISA">
            VISA
          </option>

          <option value="MASTERCARD">
            MASTERCARD
          </option>

          <option value="KAKAO">
            KAKAOPAY
          </option>

        </select>

        <input v-model="newCard.cardNumber" placeholder="카드번호">


        <input v-model="newCard.cvc" placeholder="CVC">

        <input v-model="newCard.expiry" placeholder="MM/YY">

        <button @click="addCard">
          등록
        </button>

        <button @click="showAdd=false">
          닫기
        </button>

      </div>

    </div>


    <!-- 카드 상세 -->

    <div v-if="showDetail" class="modal">

      <div class="modal-box">

        <h3>카드 상세</h3>

        <div class="detail-row">
          <span>카드번호 : </span>
          <span>{{detail.cardNumber}}</span>
        </div>

        <div class="detail-row">
          <span>잔액 : </span>
          <span>{{detail.balance}}</span>
        </div>

        <div class="detail-row">
          <span>한도 : </span>
          <span>{{detail.cardLimit}}</span>
        </div>

        <div class="detail-row">
          <span>CVC : </span>
          <span>{{detail.cvc}}</span>
        </div>

        <div class="detail-row">
          <span>만료일 : </span>
          <span>{{detail.expiry}}</span>
        </div>

        <button @click="showDetail=false">
          닫기
        </button>

      </div>

    </div>

  </div>

</template>


<script>

import CardItem from "./CardItem.vue"
import {getCards,createCard,getCardDetail} from "../../api/cardApi.js"
import "../../assets/card.css"

export default{

  components:{
    CardItem
  },

  data(){

    return{

      cards:[],

      showAdd:false,
      showDetail:false,

      detail:{},

      newCard:{
        cardType:"",
        cardNumber:"",
        cvc:"",
        expiry:""
      }

    }

  },

  mounted(){

    this.loadCards()

  },

  methods:{

    async loadCards(){

      this.cards = await getCards()

    },

    async addCard(){

      try{

        await createCard(this.newCard)

        alert("카드 등록 완료")

        this.showAdd=false

        this.loadCards()

        this.newCard={
          cardType:"",
          cardNumber:"",
          cvc:"",
          expiry:""
        }

      }catch(e){

        alert("카드 등록 실패")

        console.error(e)

      }

    },

    async openDetail(id){

      this.detail = await getCardDetail(id)

      this.showDetail=true

    },


  }

}

</script>