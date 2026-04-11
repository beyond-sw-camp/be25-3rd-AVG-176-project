<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { sidebarNav } from '../config/appShellLayoutConfig'

const route = useRoute()
</script>

<template>
  <aside
    class="sticky top-0 flex h-svh w-[331px] shrink-0 flex-col border-r border-neutral-200 bg-white"
  >
    <div class="flex items-center h-[66px] gap-3 border-b border-neutral-100 px-6 py-4">
      <span class="inline-block size-[26px] rounded border border-neutral-300 bg-neutral-50" />
      <RouterLink to="/" class="text-[22px] font-bold text-neutral-900 no-underline">
        AutoSource
      </RouterLink>
    </div>
    <nav class="flex-1 overflow-y-auto px-6 py-4">
      <ul class="space-y-1">
        <template v-for="(item, i) in sidebarNav" :key="i">
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
</template>
