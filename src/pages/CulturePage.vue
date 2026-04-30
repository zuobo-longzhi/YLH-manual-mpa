<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.culture" :keyword="keyword" />
    <div class="grid two-col">
      <article class="card wide-card">
        <HighlightText text="公司简介" :keyword="keyword" tag="h3" />
        <HighlightText v-for="p in culture.company" :key="p" :text="p" :keyword="keyword" tag="p" />
        <MetricGrid :items="culture.stats" :keyword="keyword" />
      </article>
      <div class="stack">
        <article v-for="item in culture.values" :key="item.title" class="card value-card">
          <HighlightText :text="item.title" :keyword="keyword" tag="span" />
          <HighlightText :text="item.content" :keyword="keyword" tag="strong" />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import MetricGrid from '../components/manual/MetricGrid.vue'
import PageHeader from '../components/common/PageHeader.vue'
import { culture, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
