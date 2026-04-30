<template>
  <article class="card holiday-card">
    <span class="holiday-icon">{{ item.icon }}</span>
    <HighlightText :text="item.title" :keyword="keyword" tag="small" />
    <HighlightText :text="item.value" :keyword="keyword" tag="strong" />
    <HighlightText :text="item.desc" :keyword="keyword" tag="p" />
  </article>
</template>

<script setup>
import HighlightText from '../common/HighlightText.vue'

defineProps({
  item: { type: Object, required: true },
  keyword: { type: String, default: '' },
})
</script>
