<script setup>
import { ref } from 'vue'
import BaseButton from '../../components/common/BaseButton.vue'
import BaseCheckTable from '../../components/common/BaseCheckTable.vue'
import BaseSectionTitle from '../../components/common/BaseSectionTitle.vue'

const forbiddenSelectedKeys = ref([])
const replacementSelectedKeys = ref([])

const forbiddenRows = ref([{ id: 'forbidden-1', no: 1, word: '정품보장', editing: false }])
const replacementRows = ref([
  {
    id: 'replacement-1',
    no: 1,
    sourceWord: '무료배송',
    replacementWord: '배송비 포함',
    editing: false,
  },
])

const forbiddenColumns = [
  {
    key: 'no',
    label: 'No.',
    headerClass: 'w-20 text-center',
    cellClass: 'text-center text-neutral-600',
  },
  { key: 'word', label: '단어', cellClass: 'font-medium' },
  { key: 'management', label: '관리', headerClass: 'w-28 text-center', cellClass: 'text-center' },
]

const replacementColumns = [
  {
    key: 'no',
    label: 'No.',
    headerClass: 'w-20 text-center',
    cellClass: 'text-center text-neutral-600',
  },
  { key: 'sourceWord', label: '원본 단어', cellClass: 'font-medium' },
  { key: 'replacementWord', label: '치환 단어', cellClass: 'font-medium' },
  { key: 'management', label: '관리', headerClass: 'w-28 text-center', cellClass: 'text-center' },
]

function nextId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function renumberRows(rows) {
  rows.forEach((row, index) => {
    row.no = index + 1
  })
}

function addForbiddenRow() {
  forbiddenRows.value.push({
    id: nextId('forbidden'),
    no: forbiddenRows.value.length + 1,
    word: '',
    editing: true,
  })
}

function addReplacementRow() {
  replacementRows.value.push({
    id: nextId('replacement'),
    no: replacementRows.value.length + 1,
    sourceWord: '',
    replacementWord: '',
    editing: true,
  })
}

function deleteForbiddenRows() {
  if (forbiddenSelectedKeys.value.length === 0) return

  forbiddenRows.value = forbiddenRows.value.filter(
    (row) => !forbiddenSelectedKeys.value.includes(row.id),
  )
  forbiddenSelectedKeys.value = []
  renumberRows(forbiddenRows.value)
}

function deleteReplacementRows() {
  if (replacementSelectedKeys.value.length === 0) return

  replacementRows.value = replacementRows.value.filter(
    (row) => !replacementSelectedKeys.value.includes(row.id),
  )
  replacementSelectedKeys.value = []
  renumberRows(replacementRows.value)
}

function toggleForbiddenEdit(row) {
  row.editing = !row.editing
}

function toggleReplacementEdit(row) {
  row.editing = !row.editing
}
</script>

<template>
  <div class="space-y-12">
    <section>
      <BaseSectionTitle>금지단어</BaseSectionTitle>
      <div class="mt-2 flex">
        <span class="mr-2 text-amber-600">ⓘ</span>
        <p class="text-sm text-neutral-700">
          상품명에 해당 단어가 포함되면 검색, 수집, 업로드 과정에서 자동으로 제외됩니다.
        </p>
      </div>
      
      <BaseCheckTable
        v-model:selected-keys="forbiddenSelectedKeys"
        class="mt-4"
        :columns="forbiddenColumns"
        :rows="forbiddenRows"
        row-key="id"
        :max-visible-rows="5"
        select-all-label="금지단어 전체 선택"
        empty-text="등록된 금지단어가 없습니다."
        :row-select-label="(row) => `${row.no}번 금지단어 선택`"
      >
        <template #cell-word="{ row }">
          <input
            v-if="row.editing"
            v-model="row.word"
            type="text"
            placeholder="금지단어 입력"
            class="w-full rounded border border-transparent bg-transparent px-2 py-1 text-sm outline-none focus:border-neutral-300 focus:bg-white"
          />
          <span v-else>{{ row.word }}</span>
        </template>
        <template #cell-management="{ row }">
          <BaseButton variant="secondary" size="sm" @click="toggleForbiddenEdit(row)">
            {{ row.editing ? '저장' : '수정' }}
          </BaseButton>
        </template>
      </BaseCheckTable>

      <div class="mt-4 flex justify-end gap-2">
        <BaseButton size="sm" @click="addForbiddenRow">+ 추가하기</BaseButton>
        <BaseButton
          variant="secondary"
          size="sm"
          :disabled="forbiddenSelectedKeys.length === 0"
          @click="deleteForbiddenRows"
        >
          - 삭제하기
        </BaseButton>
      </div>
    </section>

    <section>
      <BaseSectionTitle>치환단어</BaseSectionTitle>
      <div class="mt-2 flex">
        <span class="mr-2 text-amber-600">ⓘ</span>
        <p class="text-sm text-neutral-700">
          특정 단어를 다른 표현으로 자동 변경됩니다. (예 : 무료배송 → 배송비 포함)
        </p>
      </div>

      <BaseCheckTable
        v-model:selected-keys="replacementSelectedKeys"
        class="mt-4"
        :columns="replacementColumns"
        :rows="replacementRows"
        row-key="id"
        :max-visible-rows="5"
        select-all-label="치환단어 전체 선택"
        empty-text="등록된 치환단어가 없습니다."
        :row-select-label="(row) => `${row.no}번 치환단어 선택`"
      >
        <template #cell-sourceWord="{ row }">
          <input
            v-if="row.editing"
            v-model="row.sourceWord"
            type="text"
            placeholder="원본 단어 입력"
            class="w-full rounded border border-transparent bg-transparent px-2 py-1 text-sm outline-none focus:border-neutral-300 focus:bg-white"
          />
          <span v-else>{{ row.sourceWord }}</span>
        </template>
        <template #cell-replacementWord="{ row }">
          <input
            v-if="row.editing"
            v-model="row.replacementWord"
            type="text"
            placeholder="치환 단어 입력"
            class="w-full rounded border border-transparent bg-transparent px-2 py-1 text-sm outline-none focus:border-neutral-300 focus:bg-white"
          />
          <span v-else>{{ row.replacementWord }}</span>
        </template>
        <template #cell-management="{ row }">
          <BaseButton variant="secondary" size="sm" @click="toggleReplacementEdit(row)">
            {{ row.editing ? '저장' : '수정' }}
          </BaseButton>
        </template>
      </BaseCheckTable>

      <div class="mt-4 flex justify-end gap-2">
        <BaseButton size="sm" @click="addReplacementRow">+ 추가하기</BaseButton>
        <BaseButton
          variant="secondary"
          size="sm"
          :disabled="replacementSelectedKeys.length === 0"
          @click="deleteReplacementRows"
        >
          - 삭제하기
        </BaseButton>
      </div>
    </section>
  </div>
</template>
