<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.finance" :keyword="keyword" />
    <div class="grid two-col ratio-finance">
      <article class="card finance-highlight">
        <span>报销日</span>
        <strong>每月 15 日 / 25 日</strong>
        <HighlightText text="所有员工原则上应当当月报销发票，最晚次月15日之前必须全部提交财务部，过期将不予受理。所有报销必须附有发票。" :keyword="keyword" tag="p" />
      </article>
      <InfoCard title="报销时间及流程" :items="finance.process" :keyword="keyword" />
    </div>
    <div class="grid three-col">
      <InfoCard v-for="card in finance.expenses" :key="card.title" :title="card.title" :items="card.items" :keyword="keyword" />
    </div>
    <div class="grid two-col">
      <InfoCard title="单据填写规范" :items="finance.documentRules" :keyword="keyword" />
      <InfoCard title="借款、销款流程" :items="finance.borrowing" :keyword="keyword" />
    </div>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import { finance, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
