<template>
  <article :class="['card', 'info-card', { danger, success }]">
    <HighlightText :text="title" :keyword="keyword" tag="h3" />
    <ul>
      <li v-for="item in items" :key="item">
        <HighlightText :text="item" :keyword="keyword" />
      </li>
    </ul>
  </article>
</template>

<script setup>
import HighlightText from './HighlightText.vue'

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  keyword: { type: String, default: '' },
  danger: { type: Boolean, default: false },
  success: { type: Boolean, default: false },
})
</script>
