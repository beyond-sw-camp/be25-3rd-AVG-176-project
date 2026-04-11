<script setup>
import AppShellFooter from './AppShellFooter.vue'
import AppShellHeader from './AppShellHeader.vue'
import AppShellSidebar from './AppShellSidebar.vue'
</script>

<template>
  <div class="flex min-h-svh bg-[#fafafa] font-sans text-neutral-900">
    <AppShellSidebar />

    <div class="flex min-w-0 flex-1 flex-col">
      <AppShellHeader />
      <main class="flex-1 overflow-y-auto px-4 py-6 lg:px-10 lg:py-4">
        <RouterView />
      </main>
      <AppShellFooter />
    </div>
  </div>
</template>
