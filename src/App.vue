<template>
  <div class="app">
    <!-- 侧边栏覆盖层 -->
    <div 
      v-if="sidebarVisible" 
      class="sidebar-overlay"
      @click="toggleSidebar"
    ></div>
    
    <!-- 侧边栏 -->
    <Sidebar
      :selected-category="selectedCategory"
      :selected-sub-item="selectedSubItem"
      :visible="sidebarVisible"
      :show-home-page="showHomePage"
      @select="handleSelect"
      @close="toggleSidebar"
      @back-to-home="backToHome"
    />
    
    <!-- 首页 -->
    <HomePage 
      v-if="showHomePage"
      @select="handleHomeSelect"
      @toggle-sidebar="toggleSidebar"
    />
    
    <!-- 内容页面 -->
    <ContentArea
      v-else
      :selected-category="selectedCategory"
      :selected-sub-item="selectedSubItem"
      :data="data"
      @toggle-sidebar="toggleSidebar"
      @back-to-home="backToHome"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import HomePage from './components/HomePage.vue'
import Sidebar from './components/Sidebar.vue'
import ContentArea from './components/ContentArea.vue'
import { categories, getSampleData } from './utils/dataParser.js'

const router = useRouter()
const route = useRoute()

const selectedCategory = ref('')
const selectedSubItem = ref('')
const data = ref(getSampleData())
const sidebarVisible = ref(false)
const isMobile = ref(false)

// 根据路由判断是否显示首页
const showHomePage = computed(() => route.path === '/')

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
  // 跳转到对应的路由
  router.push(`/${category}/${encodeURIComponent(subItem)}`)
  // 移动端选择后自动关闭侧边栏
  if (isMobile.value) {
    sidebarVisible.value = false
  }
}

const handleHomeSelect = ({ category, subItem }) => {
  // 跳转到对应的路由
  router.push(`/${category}/${encodeURIComponent(subItem)}`)
}

const backToHome = () => {
  router.push('/')
  window.scrollTo(0, 0)
}

// 监听路由变化，更新选中的分类和子项
watch(
  () => route.params,
  (params) => {
    if (params.category && params.subItem) {
      selectedCategory.value = params.category
      selectedSubItem.value = decodeURIComponent(params.subItem)
    }
  },
  { immediate: true }
)

// 初始化
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  
  // 如果当前路由有参数，更新选中状态
  if (route.params.category && route.params.subItem) {
    selectedCategory.value = route.params.category
    selectedSubItem.value = decodeURIComponent(route.params.subItem)
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

