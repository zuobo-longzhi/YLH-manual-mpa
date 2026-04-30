<template>
  <component :is="tag" v-html="html" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: [String, Number], default: '' },
  keyword: { type: String, default: '' },
  tag: { type: String, default: 'span' },
})

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

const html = computed(() => {
  const escaped = escapeHtml(props.text)
  const keyword = props.keyword.trim()
  if (!keyword) return escaped
  const safe = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return escaped.replace(new RegExp(`(${safe})`, 'gi'), '<mark>$1</mark>')
})
</script>
