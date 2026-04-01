<script setup>
import { ref } from 'vue'

const amazonPriceAdjust = ref(true)
const competeAdjust = ref(true)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-neutral-900">상품 업로드/ 마켓 설정</h1>

    <div class="mt-6 flex flex-wrap gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <span class="text-sm font-medium text-neutral-600">국내 마켓</span>
      <span class="font-semibold">쿠팡</span>
      <span class="text-neutral-400">▼</span>
    </div>

    <div class="mt-8 grid gap-6 xl:grid-cols-2">
      <section class="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div class="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          <span>ⓘ</span>
          <p>
            이 설정은 앞으로 등록할 상품의 가격에 반영됩니다. 이미 업로드된 제품에는 적용되지 않습니다.
          </p>
        </div>

        <h2 class="mt-6 text-lg font-semibold text-neutral-900">기본 판매 가격 설정</h2>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <label class="block text-sm">
            <span class="text-neutral-600">목표 마진율 (%)</span>
            <input
              type="text"
              value="30"
              class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
          </label>
          <label class="block text-sm">
            <span class="text-neutral-600">최소 마진 (원)</span>
            <input
              type="text"
              value="8,000"
              class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
          </label>
          <label class="block text-sm">
            <span class="text-neutral-600">마켓 수수료 (%)</span>
            <input
              type="text"
              value="10"
              class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
          </label>
          <label class="block text-sm">
            <span class="text-neutral-600">카드 수수료 (%)</span>
            <input
              type="text"
              value="3.3"
              class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
          </label>
          <label class="block text-sm">
            <span class="text-neutral-600">환율</span>
            <input
              type="text"
              value="1,350"
              class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
          </label>
          <label class="block text-sm">
            <span class="text-neutral-600">단위 올림</span>
            <input
              type="text"
              value="100원 단위"
              class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
          </label>
        </div>

        <div class="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <p class="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <span class="text-point">✓</span>
            가격 계산 기준
          </p>
          <p class="mt-2 text-sm text-neutral-600">
            Amazon 상품 가격을 기준으로 환율과 수수료를 적용하여 판매 가격을 자동 계산
          </p>
        </div>

        <div class="mt-6 space-y-4 border-t border-neutral-100 pt-6">
          <label class="flex items-start gap-3 text-sm">
            <input v-model="amazonPriceAdjust" type="checkbox" class="mt-1 rounded border-neutral-300 text-point" />
            <span>
              <span class="font-medium text-neutral-900">Amazon 가격 기준 자동 조정</span>
              <span class="mt-1 block text-neutral-600">Amazon 가격 변동에 따라 판매 가격을 자동으로 조정합니다.</span>
            </span>
          </label>
          <label class="flex items-start gap-3 text-sm">
            <input v-model="competeAdjust" type="checkbox" class="mt-1 rounded border-neutral-300 text-point" />
            <span>
              <span class="font-medium text-neutral-900">경쟁 상품 가격 자동 조정</span>
              <span class="mt-1 block text-neutral-600">경쟁 상품 최저가보다 100원 낮게 자동 설정</span>
            </span>
          </label>
        </div>
      </section>

      <section class="space-y-6">
        <div class="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 class="text-lg font-semibold text-neutral-900">자동 보호 설정</h2>
          <label class="mt-4 flex items-start gap-3 text-sm">
            <input type="checkbox" checked class="mt-1 rounded border-neutral-300 text-point" />
            <span>
              <span class="font-medium">최소 마진 보호</span>
              <span class="mt-1 block text-neutral-600">
                설정한 최소 마진 이하로 이익이 내려가지 않도록 자동으로 가격을 조정합니다.
              </span>
            </span>
          </label>
          <label class="mt-4 flex items-start gap-3 text-sm">
            <input type="checkbox" checked class="mt-1 rounded border-neutral-300 text-point" />
            <span>
              <span class="font-medium">환율 변동 시 가격 자동 업데이트</span>
              <span class="mt-1 block text-neutral-600">환율 변동이 발생하면 판매 가격을 자동으로 업데이트합니다.</span>
            </span>
          </label>
          <label class="mt-4 flex items-start gap-3 text-sm">
            <input type="checkbox" checked class="mt-1 rounded border-neutral-300 text-point" />
            <span>
              <span class="font-medium">손실 발생 시 판매 중지</span>
              <span class="mt-1 block text-neutral-600">
                가격 변동으로 손실이 발생할 경우 해당 상품을 자동으로 판매 중지합니다.
              </span>
            </span>
          </label>
        </div>

        <div class="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 class="text-lg font-semibold text-neutral-900">배송비 설정</h2>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <label class="text-sm">
              <span class="text-neutral-600">배송비 종류</span>
              <select class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm">
                <option>유료 배송</option>
              </select>
            </label>
            <label class="text-sm">
              <span class="text-neutral-600">기본 배송비</span>
              <input type="text" value="5,000" class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm" />
            </label>
            <label class="text-sm">
              <span class="text-neutral-600">제주 도서산간 추가비용</span>
              <input type="text" value="8,000" class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm" />
            </label>
            <label class="text-sm">
              <span class="text-neutral-600">반품비 (편도)</span>
              <input type="text" value="10,000" class="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm" />
            </label>
          </div>
          <div class="mt-4 flex gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs text-blue-900">
            <span>ⓘ</span>
            <p>
              국내 마켓 업로드 시, 마켓 배송비 정책에 맞지 않으면 상품 배송비가 자동으로 변경되어 업로드될 수 있습니다.
            </p>
          </div>
        </div>

        <button
          type="button"
          class="w-full rounded-lg bg-point py-3 text-sm font-semibold text-white hover:bg-point/90"
        >
          설정 정보 저장하기
        </button>
      </section>
    </div>
  </div>
</template>
