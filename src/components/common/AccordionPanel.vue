<template>
  <article :class="['accordion-panel', { danger: panel.danger }]">
    <button type="button" @click="open = !open">
      <HighlightText :text="panel.title" :keyword="keyword" />
      <em>{{ open ? '收起' : '展开' }}</em>
    </button>
    <ul v-if="open">
      <li v-for="item in panel.items" :key="item">
        <HighlightText :text="item" :keyword="keyword" />
      </li>
    </ul>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import HighlightText from './HighlightText.vue'

const props = defineProps({
  panel: { type: Object, required: true },
  keyword: { type: String, default: '' },
  defaultOpen: { type: Boolean, default: false },
})

const open = ref(props.defaultOpen)
</script>
