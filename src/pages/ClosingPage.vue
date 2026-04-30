<template>
  <section class="manual-section">
    <PageHeader :meta="pageMeta.closing" :keyword="keyword" />
    <article class="card closing-card">
      <HighlightText text="愿您在雅利恒工作愉快，事业有成！" :keyword="keyword" tag="h3" />
      <HighlightText v-for="p in closing.paragraphs" :key="p" :text="p" :keyword="keyword" tag="p" />
      <button class="primary-btn" type="button" @click="downloadPdf">导出 PDF</button>
    </article>
  </section>
</template>

<script setup>
import HighlightText from '../components/common/HighlightText.vue'
import PageHeader from '../components/common/PageHeader.vue'
import { closing, pageMeta } from '../data/manual.js'

defineProps({ keyword: { type: String, default: '' } })
const PDF_URL = `${import.meta.env.BASE_URL}files/雅利恒员工手册 -第三版（2022.8.22）.pdf`

const downloadPdf = () => {
  const link = document.createElement('a')
  link.href = PDF_URL
  link.download = '雅利恒员工手册-第三版.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
