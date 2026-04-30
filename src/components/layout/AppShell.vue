<template>
  <div :class="['manual-app', { dark: isDark }]">
    <SidebarNav
      :page="page"
      :keyword="keyword"
      :mobile-open="mobileOpen"
      @update:keyword="$emit('update:keyword', $event)"
      @close="mobileOpen = false"
    />
    <button v-if="mobileOpen" class="mobile-mask" type="button" @click="mobileOpen = false" aria-label="关闭遮罩"></button>

    <TopBar
      :page="page"
      :is-dark="isDark"
      @open-menu="mobileOpen = true"
      @toggle-dark="$emit('toggle-dark')"
      @print="$emit('print')"
    />

    <main class="content">
      <slot />
    </main>

    <button class="back-top" type="button" @click="scrollTop" aria-label="返回顶部">↑</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarNav from './SidebarNav.vue'
import TopBar from './TopBar.vue'

defineProps({
  page: { type: String, default: 'overview' },
  keyword: { type: String, default: '' },
  isDark: { type: Boolean, default: false },
})

defineEmits(['update:keyword', 'toggle-dark', 'print'])

const mobileOpen = ref(false)

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
