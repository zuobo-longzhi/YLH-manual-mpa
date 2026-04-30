<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.leave" :keyword="keyword" />

    <div class="grid three-col">
      <HolidayCard v-for="item in leave.holidayCards" :key="item.title" :item="item" :keyword="keyword" />
    </div>

    <div class="grid two-col">
      <article class="card">
        <HighlightText text="年假标准" :keyword="keyword" tag="h3" />
        <div v-for="row in leave.annualLeave" :key="row.years" class="rule-row">
          <HighlightText :text="row.years" :keyword="keyword" tag="span" />
          <HighlightText :text="row.days" :keyword="keyword" tag="strong" />
        </div>
        <HighlightText text="累计工作满1年不满10年的职工，请病假累计2个月以上的，不享受当年的年休假。" :keyword="keyword" tag="p" class="muted" />
      </article>
      <InfoCard title="假期其他规定" :items="leave.otherRules" :keyword="keyword" />
    </div>

    <div class="grid three-col">
      <InfoCard title="社会保险" :items="leave.socialInsurance" :keyword="keyword" />
      <InfoCard title="全勤奖条件" :items="leave.attendanceAward" :keyword="keyword" />
      <InfoCard title="节假日与团队福利" :items="leave.welfare" :keyword="keyword" />
    </div>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import HolidayCard from '../components/manual/HolidayCard.vue'
import { leave, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
