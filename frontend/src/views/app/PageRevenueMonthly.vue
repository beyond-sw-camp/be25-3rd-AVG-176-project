<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Chart from 'chart.js/auto'

const USER_ID = 10
const API = `http://localhost:8084/orders/revenue/monthly/${USER_ID}`

const rows = ref([])
let chartInstance = null

/* -----------------------------
   데이터 가져오기 (월별 집계 API)
----------------------------- */
const fetchData = async () => {
  try {
    const res = await axios.get(API)

    console.log('monthly revenue:', res.data)

    rows.value = res.data.map(r => ({
      year: `${r.year}년`,
      month: `${r.month}월`,
      orders: r.orderCount,
      sales: r.sales,
      margin: r.margin,
      rate: r.profitRate.toFixed(1) + '%'
    }))

    renderChart()
  } catch (e) {
    console.error(e)
  }
}

/* -----------------------------
   차트 생성
----------------------------- */
const renderChart = () => {
  if (chartInstance) chartInstance.destroy()

  const ctx = document.getElementById('revenueChart')

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: rows.value.map(r => `${r.year} ${r.month}`),
      datasets: [
        {
          label: '매출',
          data: rows.value.map(r => r.sales),
          categoryPercentage: 0.6,
          barPercentage: 0.5,
          barThickness: 20
        },
        {
          label: '마진',
          data: rows.value.map(r => r.margin),
          categoryPercentage: 0.6,
          barPercentage: 0.5,
          barThickness: 20
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}

onMounted(fetchData)
</script>

<template>
  <div>
    <!-- 필터 -->
    <div class="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <div class="flex flex-wrap items-center gap-2">
        <BaseSelect>
          <option>전체 🔻</option>
        </BaseSelect>
        <span class="text-sm text-neutral-600">전체 기간</span>
        <span class="text-sm text-neutral-600">최근 6개월</span>
        <span class="text-sm text-neutral-600">최근 12개월</span>
      </div>
      <div class="flex gap-2">
        <BaseButton variant="secondary">필터 적용</BaseButton>
        <BaseButton>검색</BaseButton>
      </div>
    </div>

    <!-- 차트 -->
    <div class="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <canvas id="revenueChart" height="100"></canvas>
      <p class="mt-2 text-center text-xs text-neutral-500">
        월별 매출·마진 추이
      </p>
    </div>

    <!-- 테이블 -->
    <div class="mt-8 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table class="min-w-[900px] w-full text-left text-sm">
        <thead class="border-b border-neutral-100 bg-neutral-50 text-xs text-neutral-600">
          <tr>
            <th class="px-4 py-3">연도</th>
            <th class="px-4 py-3">월</th>
            <th class="px-4 py-3">주문 수</th>
            <th class="px-4 py-3">매출</th>
            <th class="px-4 py-3">마진</th>
            <th class="px-4 py-3">수익률</th>
            <th class="px-4 py-3">관리</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(r, i) in rows" :key="i" class="border-b border-neutral-100">
            <td class="px-4 py-4">{{ r.year }}</td>
            <td class="px-4 py-4">{{ r.month }}</td>
            <td class="px-4 py-4">{{ r.orders }}</td>
            <td class="px-4 py-4">{{ r.sales }}</td>
            <td class="px-4 py-4">{{ r.margin }}</td>
            <td class="px-4 py-4 text-point">{{ r.rate }}</td>
            <td class="px-4 py-4">
              <BaseButton variant="ghost">상세보기</BaseButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <BasePagination v-model:current-page="currentPage" :total-pages="2" />
  </div>
</template>
