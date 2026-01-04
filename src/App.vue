<template>
  <div class="app">
    <div 
      v-if="sidebarVisible" 
      class="sidebar-overlay"
      @click="toggleSidebar"
    ></div>
    <Sidebar
      :selected-category="selectedCategory"
      :selected-sub-item="selectedSubItem"
      :visible="sidebarVisible"
      @select="handleSelect"
      @close="toggleSidebar"
    />
    <ContentArea
      :selected-category="selectedCategory"
      :selected-sub-item="selectedSubItem"
      :data="data"
      @toggle-sidebar="toggleSidebar"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import ContentArea from './components/ContentArea.vue'
import { categories, getSampleData } from './utils/dataParser.js'

const selectedCategory = ref('')
const selectedSubItem = ref('')
const data = ref(getSampleData())
const sidebarVisible = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) {
    sidebarVisible.value = true
  } else {
    sidebarVisible.value = false
  }
}

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

const handleSelect = ({ category, subItem }) => {
  selectedCategory.value = category
  selectedSubItem.value = subItem
  // 移动端选择后自动关闭侧边栏
  if (isMobile.value) {
    sidebarVisible.value = false
  }
}

// 初始化选择第一个分类
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  if (categories.length > 0) {
    selectedCategory.value = categories[0].id
    selectedSubItem.value = categories[0].subItems[0]
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  position: relative;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

@media (max-width: 767px) {
  .sidebar-overlay {
    display: block;
  }
}
</style>

