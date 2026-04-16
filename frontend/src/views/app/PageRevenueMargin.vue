<script setup>
import { ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

// ── 더미 데이터 ──────────────────────────────────────────
const CHART_COLORS = {
  원가: '#6366f1',
  플랫폼수수료: '#f59e0b',
  배송비: '#3b82f6',
  운영비: '#a3a3a3',
  마진: '#22c55e',
}

const expectedData = {
  totalMargin: 660000,
  marginRate: 23.5,
  원가: 1200000,
  플랫폼수수료: 280000,
  배송비: 150000,
  운영비: 520000,
  마진: 660000,
}

const actualData = {
  totalMargin: 596000,
  marginRate: 21.2,
  원가: 1200000,
  플랫폼수수료: 310000,
  배송비: 170000,
  운영비: 540000,
  마진: 596000,
}

function toChartData(data) {
  return {
    labels: ['상품 원가', '플랫폼 수수료', '배송비', '운영비', '실제 마진'],
    datasets: [
      {
        data: [data.원가, data.플랫폼수수료, data.배송비, data.운영비, data.마진],
        backgroundColor: [
          CHART_COLORS.원가,
          CHART_COLORS.플랫폼수수료,
          CHART_COLORS.배송비,
          CHART_COLORS.운영비,
          CHART_COLORS.마진,
        ],
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 6,
      },
    ],
  }
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '65%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 12,
        font: { size: 12 },
        usePointStyle: true,
        pointStyleWidth: 8,
      },
    },
    tooltip: {
      callbacks: {
        label(ctx) {
          const value = ctx.parsed
          const total = ctx.dataset.data.reduce((a, b) => a + b, 0)
          const pct = ((value / total) * 100).toFixed(1)
          return ` ${ctx.label}: ₩${value.toLocaleString('ko-KR')} (${pct}%)`
        },
      },
    },
  },
}

// ── 테이블 더미 데이터 ────────────────────────────────────
const tableRows = [
  {
    registeredAt: '2026-03-10 09:21',
    productName: '무선 블루투스 이어폰 ANC',
    salePrice: 89000,
    margin: 18000,
    reviewCount: 312,
    orderCount: 24,
  },
  {
    registeredAt: '2026-03-12 14:05',
    productName: '스마트 LED 스탠드 (3단 밝기)',
    salePrice: 45000,
    margin: 9500,
    reviewCount: 180,
    orderCount: 11,
  },
  {
    registeredAt: '2026-03-15 11:47',
    productName: '폴더블 키보드 미니 (휴대용)',
    salePrice: 62000,
    margin: 13000,
    reviewCount: 95,
    orderCount: 7,
  },
  {
    registeredAt: '2026-03-18 16:30',
    productName: '차량용 무선 충전 거치대',
    salePrice: 38000,
    margin: 8200,
    reviewCount: 450,
    orderCount: 33,
  },
  {
    registeredAt: '2026-03-21 10:15',
    productName: '초경량 접이식 캠핑 의자',
    salePrice: 73000,
    margin: 15500,
    reviewCount: 67,
    orderCount: 5,
  },
]

function calcExpectedSales(row) {
  return row.reviewCount * row.salePrice
}

function calcActualSales(row) {
  return row.orderCount * row.salePrice
}

function calcActualProfit(row) {
  return row.orderCount * row.margin
}

function calcProfitRateDiff(row) {
  const expected = calcExpectedSales(row)
  const actual = calcActualSales(row)
  if (expected === 0) return '-'
  const diff = ((actual - expected) / expected) * 100
  return diff.toFixed(1)
}

function formatKrw(value) {
  return `₩${value.toLocaleString('ko-KR')}`
}

// ── 팝업 ──────────────────────────────────────────────────
const selectedRow = ref(null)

function openDetail(row) {
  selectedRow.value = row
}

function closeDetail() {
  selectedRow.value = null
}
</script>

<template>
  <div>
    <!-- ═══ 도넛 차트 카드 ═══ -->
    <div class="grid gap-6 lg:grid-cols-2">
      <!-- 예상 마진 카드 -->
      <div class="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-medium text-neutral-500">예상 마진</p>
        <div class="mt-1 flex items-baseline gap-2">
          <p class="text-3xl font-bold text-neutral-900">{{ formatKrw(expectedData.totalMargin) }}</p>
          <p class="text-sm text-neutral-400">예상 수익률 {{ expectedData.marginRate }}%</p>
        </div>
        <div class="relative mt-6 h-64">
          <Doughnut :data="toChartData(expectedData)" :options="chartOptions" />
          <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-10">
            <p class="text-xs text-neutral-400">총 예상 마진</p>
            <p class="text-base font-bold text-neutral-800">{{ formatKrw(expectedData.totalMargin) }}</p>
          </div>
        </div>
      </div>

      <!-- 실제 마진 카드 -->
      <div class="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-medium text-neutral-500">실제 마진</p>
        <div class="mt-1 flex items-baseline gap-2">
          <p class="text-3xl font-bold text-neutral-900">{{ formatKrw(actualData.totalMargin) }}</p>
          <p class="text-sm text-neutral-400">실제 수익률 {{ actualData.marginRate }}%</p>
        </div>
        <div class="relative mt-6 h-64">
          <Doughnut :data="toChartData(actualData)" :options="chartOptions" />
          <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-10">
            <p class="text-xs text-neutral-400">총 실제 마진</p>
            <p class="text-base font-bold text-neutral-800">{{ formatKrw(actualData.totalMargin) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ 테이블 ═══ -->
    <div class="mt-8 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table class="w-full min-w-[960px] text-left text-sm">
        <thead class="border-b border-neutral-100 bg-neutral-50 text-xs text-neutral-600">
          <tr>
            <th class="px-4 py-3 font-medium">상품 등록 일시</th>
            <th class="px-4 py-3 font-medium">상품 주문 수</th>
            <th class="px-4 py-3 font-medium">예상 매출</th>
            <th class="px-4 py-3 font-medium">실제 매출</th>
            <th class="px-4 py-3 font-medium">실제 수익</th>
            <th class="px-4 py-3 font-medium">수익률 차이</th>
            <th class="px-4 py-3 font-medium">관리</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in tableRows"
            :key="i"
            class="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
          >
            <td class="px-4 py-4 text-neutral-600">{{ row.registeredAt }}</td>
            <td class="px-4 py-4 font-medium">{{ row.orderCount }}건</td>
            <td class="px-4 py-4">{{ formatKrw(calcExpectedSales(row)) }}</td>
            <td class="px-4 py-4">{{ formatKrw(calcActualSales(row)) }}</td>
            <td class="px-4 py-4 font-semibold">{{ formatKrw(calcActualProfit(row)) }}</td>
            <td class="px-4 py-4 font-medium"
              :class="Number(calcProfitRateDiff(row)) >= 0 ? 'text-emerald-600' : 'text-red-500'"
            >
              {{ calcProfitRateDiff(row) !== '-' ? (Number(calcProfitRateDiff(row)) >= 0 ? '+' : '') + calcProfitRateDiff(row) + '%' : '-' }}
            </td>
            <td class="px-4 py-4">
              <button
                type="button"
                class="rounded-md border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-100"
                @click="openDetail(row)"
              >
                상세보기
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ═══ 상세보기 팝업 ═══ -->
    <Teleport to="body">
      <div
        v-if="selectedRow"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        @click.self="closeDetail"
      >
        <div class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-neutral-900">판매 상품 상세</p>
            <button type="button" class="text-neutral-400 hover:text-neutral-600" @click="closeDetail">✕</button>
          </div>

          <p class="mt-1 text-sm text-neutral-500">{{ selectedRow.productName }}</p>

          <div class="mt-5 space-y-3 text-sm">
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">상품 등록 일시</span>
              <span class="font-medium">{{ selectedRow.registeredAt }}</span>
            </div>
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">판매가</span>
              <span class="font-medium">{{ formatKrw(selectedRow.salePrice) }}</span>
            </div>
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">소싱 리뷰 수</span>
              <span class="font-medium">{{ selectedRow.reviewCount.toLocaleString('ko-KR') }}개</span>
            </div>
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">실제 주문 수</span>
              <span class="font-medium">{{ selectedRow.orderCount }}건</span>
            </div>
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">예상 매출</span>
              <span class="font-medium">{{ formatKrw(calcExpectedSales(selectedRow)) }}</span>
            </div>
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">실제 매출</span>
              <span class="font-medium">{{ formatKrw(calcActualSales(selectedRow)) }}</span>
            </div>
            <div class="flex justify-between border-b border-neutral-100 pb-2">
              <span class="text-neutral-500">실제 수익</span>
              <span class="font-semibold text-emerald-600">{{ formatKrw(calcActualProfit(selectedRow)) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-neutral-500">수익률 차이</span>
              <span
                class="font-semibold"
                :class="Number(calcProfitRateDiff(selectedRow)) >= 0 ? 'text-emerald-600' : 'text-red-500'"
              >
                {{ calcProfitRateDiff(selectedRow) !== '-' ? (Number(calcProfitRateDiff(selectedRow)) >= 0 ? '+' : '') + calcProfitRateDiff(selectedRow) + '%' : '-' }}
              </span>
            </div>
          </div>

          <button
            type="button"
            class="mt-6 w-full rounded-lg bg-neutral-900 py-2 text-sm font-medium text-white hover:bg-neutral-700"
            @click="closeDetail"
          >
            닫기
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
