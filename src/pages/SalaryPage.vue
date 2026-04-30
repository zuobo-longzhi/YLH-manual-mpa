<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.salary" :keyword="keyword" />
    <div class="grid two-col ratio-salary">
      <article class="card">
        <HighlightText text="薪酬制定与发放" :keyword="keyword" tag="h3" />
        <div class="tag-list">
          <HighlightText v-for="tag in salary.components" :key="tag" :text="tag" :keyword="keyword" tag="span" />
        </div>
        <ul class="clean-list">
          <li v-for="item in salary.paymentRules" :key="item">
            <HighlightText :text="item" :keyword="keyword" />
          </li>
        </ul>
      </article>
      <InfoCard title="薪酬保密纪律" :items="salary.confidentiality" :keyword="keyword" danger />
    </div>
    <InfoCard title="考核规定" :items="salary.assessment" :keyword="keyword" />
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import { salary, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
