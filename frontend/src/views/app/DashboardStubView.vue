<template>
  <div>
    <h1 class="text-2xl font-bold text-neutral-900">대시보드</h1>
    <p class="mt-2 text-neutral-600">
      요약 지표·차트 영역은 (3) 대시보드 시안과 연동해 확장할 수 있습니다.
    </p>
    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="n in 4" :key="n" class="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
        <p class="text-sm text-neutral-500">지표 {{ n }}</p>
        <p class="mt-2 text-2xl font-bold text-point">—</p>
      </div>
    </div>
  </div>
</template>
