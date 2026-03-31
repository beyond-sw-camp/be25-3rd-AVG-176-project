<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { dashboardNav, appFooterText } from '../config/dashboardNav'

const route = useRoute()
</script>

<template>
  <div class="flex min-h-svh bg-[#fafafa] font-sans text-neutral-900">
    <aside
      class="sticky top-0 flex h-svh w-[331px] shrink-0 flex-col border-r border-neutral-200 bg-white"
    >
      <div class="flex items-center gap-3 border-b border-neutral-100 px-6 py-4">
        <span class="inline-block size-[26px] rounded border border-neutral-300 bg-neutral-50" />
        <RouterLink to="/" class="text-[22px] font-bold text-neutral-900 no-underline">
          AutoSource
        </RouterLink>
      </div>
      <nav class="flex-1 overflow-y-auto px-6 py-4">
        <ul class="space-y-1">
          <template v-for="(item, i) in dashboardNav" :key="i">
            <li v-if="item.type === 'heading'" class="pt-3 text-sm font-bold text-point first:pt-0">
              {{ item.label }}
            </li>
            <li v-else-if="item.type === 'sub'" class="pt-1 text-xs font-semibold text-neutral-500">
              {{ item.label }}
            </li>
            <li v-else-if="item.type === 'muted'" class="py-1 pl-0 text-[15px] text-neutral-400">
              {{ item.label }}
            </li>
            <li v-else class="py-0.5">
              <RouterLink
                :to="item.to"
                class="block rounded-md px-2 py-1.5 text-[15px] no-underline transition"
                :class="
                  route.path === item.to || route.path.startsWith(item.to + '/')
                    ? 'bg-orange-50 font-semibold text-point'
                    : 'text-neutral-800 hover:bg-neutral-50'
                "
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </nav>
    </aside>

    <div class="flex min-w-0 flex-1 flex-col">
      <header
        class="flex h-14 shrink-0 items-center justify-end border-b border-neutral-200 bg-white px-6 lg:px-10"
      >
        <div
          class="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-600"
        >
          <span class="size-2 rounded-full bg-emerald-500" />
          홍길동
        </div>
      </header>
      <main class="flex-1 overflow-y-auto px-4 py-6 lg:px-10 lg:py-8">
        <RouterView />
      </main>
      <footer class="shrink-0 border-t border-neutral-200 bg-white px-6 py-3 text-xs text-neutral-500 lg:px-10">
        {{ appFooterText }}
      </footer>
    </div>
  </div>
</template>
