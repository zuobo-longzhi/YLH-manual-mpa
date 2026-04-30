<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.conduct" :keyword="keyword" />
    <div class="grid four-col">
      <InfoCard v-for="card in conduct.cards" :key="card.title" :title="card.title" :items="card.items" :keyword="keyword" />
    </div>
    <div class="grid two-col">
      <InfoCard title="着装规范：推荐" :items="conduct.dressPositive" :keyword="keyword" success />
      <InfoCard title="着装规范：禁止" :items="conduct.dressForbidden" :keyword="keyword" danger />
    </div>
  </section>
</template>

<script setup>
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import { conduct, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
