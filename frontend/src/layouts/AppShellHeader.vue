<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { sidebarNav } from '../config/appShellLayoutConfig'

const route = useRoute()

const currentPageTitle = computed(() => {
  // 사이드바에서 선택된 메뉴명을 header 제목으로 사용한다.
  const activeItem = sidebarNav.find(
    (item) =>
      item.type === 'link' && (route.path === item.to || route.path.startsWith(item.to + '/')),
  )

  return activeItem?.label ?? ''
})
</script>

<template>
  <header
    class="flex h-[66px] shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-6 lg:px-10"
  >
    <h1 class="m-0 text-xl font-bold leading-none text-neutral-900">{{ currentPageTitle }}</h1>
    <div
      class="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-600"
    >
      <span class="size-2 rounded-full bg-emerald-500" />
      로그인중
    </div>
  </header>
</template>
