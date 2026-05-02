<template>
  <AppShell
    :page="page"
    :keyword="keyword"
    :is-dark="isDark"
    @update:keyword="keyword = $event"
    @toggle-dark="toggleDark"
    @print="printPage"
  >
    <component :is="currentPageComponent" :keyword="keyword" />
  </AppShell>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import AppShell from './components/layout/AppShell.vue'
import OverviewPage from './pages/OverviewPage.vue'
import CulturePage from './pages/CulturePage.vue'
import HiringPage from './pages/HiringPage.vue'
import AttendancePage from './pages/AttendancePage.vue'
import LeavePage from './pages/LeavePage.vue'
import ConductPage from './pages/ConductPage.vue'
import SalaryPage from './pages/SalaryPage.vue'
import OffboardingPage from './pages/OffboardingPage.vue'
import FinancePage from './pages/FinancePage.vue'
import ClosingPage from './pages/ClosingPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const props = defineProps({
  page: { type: String, default: 'overview' },
})

const keyword = ref('')
const isDark = ref(localStorage.getItem('manual-theme') === 'dark')

const pages = {
  overview: OverviewPage,
  culture: CulturePage,
  hiring: HiringPage,
  attendance: AttendancePage,
  leave: LeavePage,
  conduct: ConductPage,
  salary: SalaryPage,
  offboarding: OffboardingPage,
  finance: FinancePage,
  closing: ClosingPage,
}

const currentPageComponent = computed(() => pages[props.page] || NotFoundPage)

function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('manual-theme', isDark.value ? 'dark' : 'light')
}

const PDF_URL = `${import.meta.env.BASE_URL}files/ylh-employee-manual-v3.pdf`

function printPage() {
  const link = document.createElement('a')
  link.href = PDF_URL
  link.download = '雅利恒员工手册-第三版.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
