<template>

  <div class="stats">

    <div class="card">
      <h3>총 주문</h3>
      <p>{{ orders.length }}</p>
    </div>

    <div class="card">
      <h3>Ready</h3>
      <p>{{ ready }}</p>
    </div>

    <div class="card">
      <h3>Shipping</h3>
      <p>{{ shipping }}</p>
    </div>

    <div class="card">
      <h3>Failed</h3>
      <p>{{ failed }}</p>
    </div>

  </div>

</template>

<script>

export default{

  props:["orders"],

  computed:{

    ready(){
      return this.orders.filter(o=>o.autoOrderStatus==="Ready").length
    },

    shipping(){
      return this.orders.filter(o=>o.autoOrderStatus==="Shipping").length
    },

    failed(){
      return this.orders.filter(o=>o.autoOrderStatus==="Failed").length
    }

  }

}

</script>