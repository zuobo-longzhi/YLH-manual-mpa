<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.offboarding" :keyword="keyword" />
    <div class="grid two-col">
      <article class="card">
        <HighlightText text="员工辞职流程" :keyword="keyword" tag="h3" />
        <TimelineSteps :steps="offboarding.resignationFlow" :keyword="keyword" :columns="4" />
      </article>
      <InfoCard title="解除劳动合同途径" :items="offboarding.contractWays" :keyword="keyword" />
    </div>
    <AccordionPanel :panel="offboarding.immediateTermination" :keyword="keyword" />
    <div class="grid two-col">
      <InfoCard title="严重违反劳动纪律情形" :items="offboarding.seriousViolation" :keyword="keyword" danger />
      <InfoCard title="解聘程序" :items="offboarding.dismissalProcess" :keyword="keyword" />
    </div>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import AccordionPanel from '../components/common/AccordionPanel.vue'
import TimelineSteps from '../components/manual/TimelineSteps.vue'
import { offboarding, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
