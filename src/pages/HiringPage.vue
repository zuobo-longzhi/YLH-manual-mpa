<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.hiring" :keyword="keyword" />
    <article class="card">
      <HighlightText text="聘用原则与招聘流程" :keyword="keyword" tag="h3" />
      <TimelineSteps :steps="hiring.process" :keyword="keyword" :columns="5" />
    </article>
    <div class="grid two-col">
      <InfoCard title="聘用基础要求" :items="hiring.principles" :keyword="keyword" />
      <InfoCard title="入职资料与培训" :items="hiring.onboarding" :keyword="keyword" />
    </div>
    <div class="accordion-list">
      <AccordionPanel v-for="(panel, index) in hiring.panels" :key="panel.title" :panel="panel" :keyword="keyword" :default-open="index === 0" />
    </div>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import AccordionPanel from '../components/common/AccordionPanel.vue'
import TimelineSteps from '../components/manual/TimelineSteps.vue'
import { hiring, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
