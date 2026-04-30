<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <span class="eyebrow">第三版 · 2022.8.22 · 员工手册</span>
      <HighlightText text="欢迎加入雅利恒" :keyword="keyword" tag="h1" />
      <HighlightText :text="manualIntro" :keyword="keyword" tag="p" />
      <div class="hero-actions">
        <a href="./attendance.html">查看考勤重点</a>
        <a href="./leave.html" class="secondary">查看假期福利</a>
      </div>
    </div>
  </section>

  <section class="manual-section">
    <PageHeader :meta="overviewMeta" :keyword="keyword" />
    <div class="grid three-col">
      <article v-for="item in highlights" :key="item.title" class="card overview-card">
        <span>{{ item.icon }}</span>
        <HighlightText :text="item.title" :keyword="keyword" tag="h3" />
        <HighlightText :text="item.desc" :keyword="keyword" tag="p" />
        <a :href="item.href">查看详情</a>
      </article>
    </div>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import { manualIntro, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })

const overviewMeta = {
  ...pageMeta.overview,
  title: '手册总览',
  description:
    '本手册用于帮助员工快速了解公司文化、入职聘用、考勤请假、假期福利、行为规范、薪酬离职、财务报销等制度要求。员工可根据需要进入对应章节查阅详细内容。',
}

const highlights = [
  {
    icon: '🏢',
    title: '了解公司',
    desc: '快速了解雅利恒的发展情况、企业使命、发展战略与价值理念，帮助新员工更好融入团队。',
    href: './culture.html',
  },
  {
    icon: '⏰',
    title: '日常工作须知',
    desc: '集中查看作息时间、打卡补卡、迟到早退、请假流程、假期福利等员工日常最常用制度。',
    href: './attendance.html',
  },
  {
    icon: '🧾',
    title: '制度与流程指引',
    desc: '查阅行为规范、薪酬考核、离职交接、费用报销等制度要求，帮助员工按流程规范办理事项。',
    href: './finance.html',
  },
]
</script>