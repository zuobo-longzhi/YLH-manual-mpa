<template>
  <header class="topbar">
    <div class="topbar-left">
      <button class="menu-btn" type="button" @click="$emit('open-menu')" aria-label="打开菜单">☰</button>
      <div>
        <p>首页 &gt; {{ currentLabel }}</p>
        <h2>南京雅利恒企业管理有限公司员工手册门户</h2>
      </div>
    </div>
    <div class="topbar-actions">
      <!-- <span class="status-pill">内部资料</span> -->
      <button class="action-btn" type="button" @click="$emit('print')">导出 PDF</button>
      <button class="action-btn" type="button" @click="$emit('toggle-dark')">{{ isDark ? '浅色' : '深色' }}</button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { navItems } from '../../data/manual.js'

const props = defineProps({
  page: { type: String, default: 'overview' },
  isDark: { type: Boolean, default: false },
})

defineEmits(['open-menu', 'toggle-dark', 'print'])

const currentLabel = computed(() => navItems.find((item) => item.id === props.page)?.label || '员工手册')
</script>
