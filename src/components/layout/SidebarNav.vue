<template>
  <aside :class="['sidebar', { open: mobileOpen }]">
    <div class="brand-row">
      <div class="brand-logo">
        <img :src="logoSrc" alt="雅利恒 Logo" />
      </div>
      <div>
        <h1>雅利恒</h1>
        <p>员工手册 · 第三版</p>
      </div>
      <button class="icon-btn mobile-only" type="button" @click="$emit('close')" aria-label="关闭菜单">×</button>
    </div>

    <div class="search-box">
      <label>全文搜索</label>
      <input :value="keyword" placeholder="搜索：考勤、年假、报销..." @input="$emit('update:keyword', $event.target.value)" />
      <p v-if="keyword">命中 {{ matchedNavItems.length }} 个章节</p>
    </div>

    <nav class="nav-list">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="item.href"
        :class="{ active: page === item.id, dim: keyword && !matchedIds.includes(item.id) }"
      >
        <span class="nav-dot"></span>
        <span class="nav-icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
        <em v-if="keyword && matchedIds.includes(item.id)">命中</em>
      </a>
    </nav>

    <!-- <div class="sidebar-note">
      <strong>内部资料</strong>
      <span>多页面组件化版本；每个章节是独立页面，内容集中维护在数据文件。</span>
    </div> -->
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { getSearchText, navItems } from '../../data/manual.js'
import logoSrc from '../../assets/ylh.png' 

const props = defineProps({
  page: { type: String, default: 'overview' },
  keyword: { type: String, default: '' },
  mobileOpen: { type: Boolean, default: false },
})

defineEmits(['update:keyword', 'close'])

const matchedNavItems = computed(() => {
  const q = props.keyword.trim().toLowerCase()
  if (!q) return navItems
  return navItems.filter((item) => `${item.label} ${getSearchText(item.id)}`.toLowerCase().includes(q))
})

const matchedIds = computed(() => matchedNavItems.value.map((item) => item.id))
</script>
