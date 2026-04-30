<template>
  <div class="page-header">
    <p class="eyebrow">{{ meta.eyebrow }}</p>
    <HighlightText :text="meta.title" :keyword="keyword" tag="h1" />
    <HighlightText v-if="meta.description" :text="meta.description" :keyword="keyword" tag="p" />
  </div>
</template>

<script setup>
import HighlightText from './HighlightText.vue'

defineProps({
  meta: { type: Object, required: true },
  keyword: { type: String, default: '' },
})
</script>
