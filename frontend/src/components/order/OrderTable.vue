<template>

  <table class="order-table">

    <thead>

    <tr>

      <th></th>
      <th>주문번호</th>
      <th>고객명</th>
      <th>전화번호</th>
      <th>상품</th>
      <th>해외몰</th>
      <th>결제금액</th>
      <th>마진</th>
      <th>상태</th>
      <th>관리</th>

    </tr>

    </thead>

    <tbody>

    <tr v-for="o in orders" :key="o.orderId">

      <td>
        <input type="checkbox">
      </td>

      <td>{{o.orderId}}</td>
      <td>{{o.customerName}}</td>
      <td>{{o.customerPhone}}</td>
      <td>{{o.productName}}</td>
      <td>{{o.overseasMall}}</td>

      <td>{{format(o.paymentAmount)}}</td>
      <td>{{format(o.margin)}}</td>

      <td>

<span class="status" :class="o.autoOrderStatus">
{{o.autoOrderStatus}}
</span>

      </td>

      <td>

        <button
            class="cancel"
            @click="$emit('cancel',o.orderId)"
        >
          주문취소
        </button>

      </td>

    </tr>

    </tbody>

  </table>

</template>

<script>

export default{

  props:["orders"],

  methods:{

    format(v){

      if(!v) return "0원"

      return v.toLocaleString()+"원"

    }

  }

}

</script>