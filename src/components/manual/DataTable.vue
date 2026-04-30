<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th v-for="heading in headings" :key="heading">{{ heading }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row[0] || row.condition">
          <td v-for="field in fields" :key="field">
            <HighlightText :text="row[field]" :keyword="keyword" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import HighlightText from '../common/HighlightText.vue'

defineProps({
  headings: { type: Array, required: true },
  rows: { type: Array, required: true },
  fields: { type: Array, required: true },
  keyword: { type: String, default: '' },
})
</script>
