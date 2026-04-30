<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.attendance" :keyword="keyword" />

    <div class="grid three-col">
      <article v-for="item in attendance.workTime" :key="item.title" class="card time-card">
        <span class="big-icon">⏱</span>
        <HighlightText :text="item.title" :keyword="keyword" tag="h3" />
        <HighlightText :text="item.time" :keyword="keyword" tag="strong" />
        <HighlightText :text="item.desc" :keyword="keyword" tag="p" />
      </article>
    </div>

    <div class="grid two-col ratio-attendance">
      <article class="card">
        <div class="card-head">
          <HighlightText text="迟到 / 早退处理规则" :keyword="keyword" tag="h3" />
          <span class="warning-pill">均影响全勤奖</span>
        </div>
        <DataTable :headings="['情形', '处理方式']" :rows="attendance.lateRules" :fields="['condition', 'result']" :keyword="keyword" />
      </article>
      <div class="stack">
        <article class="card award-card">
          <span>全勤奖</span>
          <strong>200元 / 月</strong>
          <HighlightText text="周一到周五考勤记录完整，且每个月周六完成20小时到岗者，予以发放每月全勤奖；全勤奖和加班费可累计。" :keyword="keyword" tag="p" />
        </article>
        <InfoCard title="考勤打卡与补卡" :items="attendance.clockRules" :keyword="keyword" />
      </div>
    </div>

    <div class="grid two-col">
      <InfoCard title="旷工认定" :items="attendance.absenceDefinition" :keyword="keyword" danger />
      <InfoCard title="旷工处罚" :items="attendance.absencePenalty" :keyword="keyword" danger />
    </div>

    <div class="grid three-col">
      <InfoCard title="出差规定" :items="attendance.businessTrip" :keyword="keyword" />
      <InfoCard title="事假规定" :items="attendance.personalLeave" :keyword="keyword" />
      <InfoCard title="病假规定" :items="attendance.sickLeave" :keyword="keyword" />
    </div>

    <InfoCard title="请假程序" :items="attendance.leaveProcedure" :keyword="keyword" />
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import InfoCard from '../components/common/InfoCard.vue'
import DataTable from '../components/manual/DataTable.vue'
import { attendance, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
</script>
