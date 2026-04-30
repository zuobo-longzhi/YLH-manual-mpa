<template>
  <div class="stat-grid">
    <HighlightText v-for="item in items" :key="item" :text="item" :keyword="keyword" tag="div" class="stat" />
  </div>
</template>

<script setup>
import HighlightText from '../common/HighlightText.vue'

defineProps({
  items: { type: Array, required: true },
  keyword: { type: String, default: '' },
})
</script>
