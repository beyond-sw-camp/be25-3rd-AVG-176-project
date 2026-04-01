<script setup>
const cards = [
  { name: 'Amazon Prime', mask: '**** 4242', primary: true },
  { name: 'VISA', mask: '**** 1254', primary: false },
  { name: 'Smart Checkout', mask: '연동 계정', primary: false },
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-neutral-900">결제수단 관리</h1>
    <p class="mt-2 text-sm text-neutral-600">
      Figma (10) 화면은 이미지 레이어로만 제공되어, 동일 메뉴 구조에 맞춘 관리 UI로 구성했습니다.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        class="rounded-md bg-point px-4 py-2 text-sm font-medium text-white hover:bg-point/90"
      >
        결제수단 추가
      </button>
      <button type="button" class="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
        기본 결제수단 변경
      </button>
    </div>
    <ul class="mt-8 space-y-4">
      <li
        v-for="(c, i) in cards"
        :key="i"
        class="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
      >
        <div>
          <p class="font-semibold text-neutral-900">{{ c.name }}</p>
          <p class="text-sm text-neutral-500">{{ c.mask }}</p>
        </div>
        <div class="flex items-center gap-2">
          <span
            v-if="c.primary"
            class="rounded bg-point/10 px-2 py-0.5 text-xs font-medium text-point"
          >
            기본
          </span>
          <button type="button" class="text-sm text-point hover:underline">수정</button>
          <button type="button" class="text-sm text-red-600 hover:underline">삭제</button>
        </div>
      </li>
    </ul>
  </div>
</template>
