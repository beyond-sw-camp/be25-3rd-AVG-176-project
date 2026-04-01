<script setup>
import OrderListBlock from '../../components/dashboard/OrderListBlock.vue'
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-neutral-900">취소 / 환불</h1>
    <section class="mt-6">
      <h2 class="text-sm font-semibold text-neutral-700">취소/환불 건수</h2>
      <div class="mt-3 h-px bg-neutral-200" />
      <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-neutral-500">오늘 수집한 상품</p>
          <p class="mt-2 text-2xl font-bold text-neutral-400">—</p>
        </div>
        <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-neutral-500">취소 완료</p>
          <p class="mt-2 text-2xl font-bold text-point">50</p>
        </div>
        <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-neutral-500">자동 주문 처리 중</p>
          <p class="mt-2 text-2xl font-bold text-neutral-800">6</p>
        </div>
        <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-neutral-500">재시도 대기 중</p>
          <p class="mt-2 text-2xl font-bold text-amber-600">6</p>
        </div>
      </div>
    </section>
    <OrderListBlock title="주문 목록" summary-label="취소/환불 건수" />
  </div>
</template>
