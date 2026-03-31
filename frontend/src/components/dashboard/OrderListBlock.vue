<script setup>
defineProps({
  title: { type: String, default: '주문 목록' },
  summaryLabel: { type: String, default: '전체 주문 건수' },
})
const rows = [
  {
    id: '202603148876',
    market: 'coupang',
    status: '배송 준비 중',
    buyer: '홍길동 010-1234-5678',
    product: '무선 이어폰 29,000',
    margin: '39,000 10,000 (20%)',
    source: 'amazon',
  },
  {
    id: '202603148877',
    market: 'coupang',
    status: '배송 준비 중',
    buyer: '홍길동 010-1234-5678',
    product: '무선 이어폰 29,000',
    margin: '39,000 10,000 (20%)',
    source: 'amazon',
  },
  {
    id: '202603148878',
    market: 'coupang',
    status: '배송 준비 중',
    buyer: '홍길동 010-1234-5678',
    product: '무선 이어폰 29,000',
    margin: '39,000 10,000 (20%)',
    source: 'amazon',
  },
]
</script>

<template>
  <section class="mt-8">
    <h2 class="text-lg font-semibold text-neutral-900">{{ title }}</h2>
    <div class="mt-4 overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div class="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3 text-xs font-medium text-neutral-600 md:grid-cols-12 md:text-sm">
        <span class="md:col-span-1"><input type="checkbox" class="rounded border-neutral-300" /></span>
        <span class="md:col-span-2">주문번호 / 마켓</span>
        <span class="md:col-span-2">배송 상태</span>
        <span class="md:col-span-2">구매자</span>
        <span class="md:col-span-3">상품</span>
        <span class="md:col-span-2">마진</span>
      </div>
      <div
        v-for="(r, i) in rows"
        :key="i"
        class="grid grid-cols-1 gap-2 border-b border-neutral-100 px-4 py-4 text-sm last:border-0 md:grid-cols-12 md:items-center"
      >
        <div class="flex items-center md:col-span-1">
          <input type="checkbox" class="rounded border-neutral-300" />
        </div>
        <div class="md:col-span-2">
          <span class="font-mono text-neutral-800">{{ r.id }}</span>
          <span class="ml-2 text-neutral-500">{{ r.market }}</span>
        </div>
        <div class="md:col-span-2">
          <span class="rounded bg-neutral-100 px-2 py-1 text-xs">{{ r.status }}</span>
        </div>
        <div class="text-neutral-700 md:col-span-2">{{ r.buyer }}</div>
        <div class="flex items-center gap-2 md:col-span-3">
          <span class="size-14 shrink-0 rounded bg-neutral-100" />
          <span>{{ r.product }}</span>
        </div>
        <div class="text-neutral-800 md:col-span-2">{{ r.margin }}</div>
      </div>
    </div>
    <div class="mt-4 flex justify-center gap-1">
      <button type="button" class="rounded border border-neutral-200 px-3 py-1 text-sm">‹</button>
      <button type="button" class="rounded border border-point bg-point/10 px-3 py-1 text-sm font-medium text-point">
        1
      </button>
      <button type="button" class="rounded border border-neutral-200 px-3 py-1 text-sm">2</button>
      <button type="button" class="rounded border border-neutral-200 px-3 py-1 text-sm">›</button>
    </div>
  </section>
</template>
