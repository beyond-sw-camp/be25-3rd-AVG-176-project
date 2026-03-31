<script setup>
const rows = [
  { year: '2025년', month: '3월', orders: '45', sales: '₩8,620,000', margin: '₩1,780,000', rate: '20.1%' },
  { year: '2025년', month: '2월', orders: '35', sales: '₩7,780,000', margin: '₩1,330,000', rate: '1708%' },
  { year: '2024년', month: '4월', orders: '36', sales: '₩8,140,000', margin: '₩1,550,000', rate: '19.0%' },
  { year: '2024년', month: '1월', orders: '41', sales: '₩7,770,000', margin: '₩1,300,000', rate: '16.7%' },
  { year: '2024년', month: '10월', orders: '40', sales: '₩7,090,000', margin: '₩1,200,000', rate: '16.9%' },
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-neutral-900">월별 수익</h1>

    <div class="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <div class="flex flex-wrap items-center gap-2">
        <select class="rounded-md border border-neutral-300 px-3 py-2 text-sm">
          <option>전체 🔻</option>
        </select>
        <span class="text-sm text-neutral-600">전체 기간</span>
        <span class="text-sm text-neutral-600">최근 6개월</span>
        <span class="text-sm text-neutral-600">최근 12개월</span>
      </div>
      <div class="flex gap-2">
        <button type="button" class="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
          필터 적용
        </button>
        <button type="button" class="rounded-md bg-point px-4 py-2 text-sm font-medium text-white hover:bg-point/90">
          검색
        </button>
      </div>
    </div>

    <div class="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <div class="h-48 rounded-md bg-gradient-to-br from-point/5 to-sub/10" />
      <p class="mt-2 text-center text-xs text-neutral-500">월별 매출·마진 추이 차트 영역</p>
    </div>

    <div class="mt-8 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table class="min-w-[900px] w-full text-left text-sm">
        <thead class="border-b border-neutral-100 bg-neutral-50 text-xs text-neutral-600">
          <tr>
            <th class="px-4 py-3 font-medium">연도</th>
            <th class="px-4 py-3 font-medium">월</th>
            <th class="px-4 py-3 font-medium">주문 수</th>
            <th class="px-4 py-3 font-medium">매출</th>
            <th class="px-4 py-3 font-medium">마진</th>
            <th class="px-4 py-3 font-medium">수익률</th>
            <th class="px-4 py-3 font-medium">관리</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in rows" :key="i" class="border-b border-neutral-100">
            <td class="px-4 py-4 font-medium">{{ r.year }}</td>
            <td class="px-4 py-4">{{ r.month }}</td>
            <td class="px-4 py-4">{{ r.orders }}</td>
            <td class="px-4 py-4">{{ r.sales }}</td>
            <td class="px-4 py-4">{{ r.margin }}</td>
            <td class="px-4 py-4 text-point">{{ r.rate }}</td>
            <td class="px-4 py-4">
              <button type="button" class="text-sm text-point hover:underline">상세보기</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4 flex justify-center gap-1">
      <button type="button" class="rounded border border-neutral-200 px-3 py-1 text-sm">‹</button>
      <button type="button" class="rounded border border-point bg-point/10 px-3 py-1 text-sm font-medium text-point">
        1
      </button>
      <button type="button" class="rounded border border-neutral-200 px-3 py-1 text-sm">2</button>
      <button type="button" class="rounded border border-neutral-200 px-3 py-1 text-sm">›</button>
    </div>
  </div>
</template>
