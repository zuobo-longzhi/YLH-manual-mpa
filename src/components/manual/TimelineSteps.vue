<template>
  <div :class="['timeline', columnsClass]">
    <div v-for="(step, index) in steps" :key="step" class="timeline-item">
      <span>{{ index + 1 }}</span>
      <HighlightText :text="step" :keyword="keyword" tag="p" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import HighlightText from '../common/HighlightText.vue'

const props = defineProps({
  steps: { type: Array, required: true },
  keyword: { type: String, default: '' },
  columns: { type: Number, default: 4 },
})

const columnsClass = computed(() => `columns-${props.columns}`)
</script>
