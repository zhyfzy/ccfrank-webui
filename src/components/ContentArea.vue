<template>
  <div class="content-area">
    <div class="sticky-header-container">
      <div class="content-title-bar">
        <button class="menu-button" @click="$emit('toggle-sidebar')">☰</button>
        <div class="title-content">
          <h1 class="main-title">中国计算机学会推荐国际学术会议和期刊目录（2022）</h1>
          <div v-if="categoryName || subItemName" class="sub-title">
            <span v-if="categoryName">{{ categoryName }}</span>
            <span v-if="categoryName && subItemName" class="title-separator"> - </span>
            <span v-if="subItemName">{{ subItemName }}</span>
          </div>
        </div>
        <a 
          href="https://github.com/zhyfzy/ccfrank-webui" 
          target="_blank" 
          rel="noopener noreferrer"
          class="github-link"
          title="在 GitHub 上查看"
        >
          <svg height="28" viewBox="0 0 16 16" width="28" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="content-header">
      <div class="level-buttons">
        <button
          v-for="level in ['A', 'B', 'C']"
          :key="level"
          class="level-button"
          @click="selectLevel(level)"
        >
          {{ level }}类
        </button>
      </div>
    </div>
    <div class="content-body">
      <div
        v-for="level in ['A', 'B', 'C']"
        :key="level"
        :id="`level-${level}`"
        class="level-section"
      >
        <h2 class="level-title">{{ level }}类</h2>
        <div v-if="currentData && currentData[level] && currentData[level].length > 0" class="items-list">
          <div
            v-for="(item, index) in currentData[level]"
            :key="index"
            class="item-card"
          >
            <div v-if="item.name" class="item-name">
              {{ item.name }}
              <span v-if="item.thcpl" class="thcpl-badge" :class="`thcpl-${item.thcpl}`">
                TH-CPL {{ item.thcpl }}
              </span>
              <span v-if="item.cas" class="cas-badge" :class="`cas-${item.cas}`">
                中科院{{ item.cas }}区
              </span>
            </div>
            <div v-if="item.fullName" class="item-full-name" :class="{ 'no-short-name': !item.name }">{{ item.fullName }}</div>
            <div v-if="item.url" class="item-url">
              <a :href="item.url" target="_blank" rel="noopener noreferrer" class="url-link">
                <span class="url-icon">🔗</span>
                {{ item.url }}
              </a>
            </div>
          </div>
        </div>
        <div v-else class="empty-state">
          <div class="empty-icon">📭</div>
          <div class="empty-text">暂无{{ level }}类数据</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { categories } from '../utils/dataParser.js'

const props = defineProps({
  selectedCategory: String,
  selectedSubItem: String,
  data: Object
})

defineEmits(['toggle-sidebar', 'back-to-home'])

const selectedLevel = ref('A')

// 获取分类名称和子分类名称
const categoryName = computed(() => {
  if (!props.selectedCategory) return ''
  const category = categories.find(cat => cat.id === props.selectedCategory)
  return category ? category.name : ''
})

const subItemName = computed(() => {
  return props.selectedSubItem || ''
})

const currentData = computed(() => {
  if (!props.selectedCategory || !props.selectedSubItem || !props.data) {
    return null
  }
  const categoryData = props.data[props.selectedCategory]
  if (!categoryData) return null
  
  const subItemKey = props.selectedSubItem === '会议' ? 'conference' : 'journal'
  return categoryData[subItemKey] || null
})

const selectLevel = (level) => {
  selectedLevel.value = level
  // 滚动到对应位置
  setTimeout(() => {
    const element = document.getElementById(`level-${level}`)
    if (element) {
      const headerHeight = 80 // 考虑固定头部的高度
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 50)
}

watch([() => props.selectedCategory, () => props.selectedSubItem], () => {
  selectedLevel.value = 'A'
  // 立即滚动到页面顶部
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.content-area {
  margin-left: 280px;
  width: calc(100% - 280px);
  min-height: 100vh;
  background-color: #f5f5f5;
}

@media (max-width: 767px) {
  .content-area {
    margin-left: 0;
    width: 100%;
  }
}

.sticky-header-container {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.content-title-bar {
  width: 100%;
  background-color: #fff;
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-sizing: border-box;
}

.title-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

.sub-title {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 1.4;
}

.title-separator {
  color: #999;
  margin: 0 6px;
}

@media (max-width: 767px) {
  .content-title-bar {
    padding: 15px 20px;
  }
  
  .main-title {
    font-size: 20px;
  }
  
  .sub-title {
    font-size: 14px;
  }
}

.content-header {
  width: 100%;
  background-color: #fff;
  padding: 20px 30px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.menu-button {
  display: none;
  background: none;
  border: 2px solid #e0e0e0;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s;
  flex-shrink: 0;
}

.menu-button:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.github-link {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s;
  flex-shrink: 0;
}

.github-link:hover {
  color: #1890ff;
  background-color: #f0f5ff;
}

@media (max-width: 767px) {
  .content-title-bar {
    padding: 15px 20px;
  }
  
  .main-title {
    font-size: 20px;
  }
  
  .sub-title {
    font-size: 14px;
  }
  
  .github-link {
    display: none;
  }
  
  .content-header {
    padding: 15px 20px;
  }
  
  .menu-button {
    display: block;
  }
}

.level-buttons {
  display: flex;
  gap: 12px;
}

@media (max-width: 767px) {
  .level-buttons {
    gap: 10px;
  }
}

.level-button {
  padding: 8px 20px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #1890ff;
  background-color: #fff;
  color: #1890ff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.1);
}

@media (max-width: 767px) {
  .level-button {
    padding: 7px 16px;
    font-size: 14px;
  }
}

.level-button:hover {
  background-color: #1890ff;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.3);
}

.content-body {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}

@media (max-width: 767px) {
  .content-body {
    padding: 15px;
  }
}

.level-section {
  width: 100%;
  margin-bottom: 40px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  scroll-margin-top: 100px; /* 为固定头部留出空间 */
  box-sizing: border-box;
}

@media (max-width: 767px) {
  .level-section {
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
  }
}

.level-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
  position: relative;
}

.level-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #1890ff 0%, #40a9ff 100%);
}

.items-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
}

@media (min-width: 1200px) {
  .items-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item-card {
  padding: 20px;
  background-color: #fafafa;
  border-radius: 6px;
  border-left: 4px solid #1890ff;
  transition: all 0.3s;
  position: relative;
}

.item-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #1890ff 0%, #40a9ff 100%);
  border-radius: 2px 0 0 2px;
}

.item-card:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
  transform: translateY(-2px);
}

.item-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.thcpl-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}

.thcpl-A {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  box-shadow: 0 2px 4px rgba(155, 89, 182, 0.3);
}

.thcpl-B {
  background: linear-gradient(135deg, #b39ddb 0%, #9575cd 100%);
  box-shadow: 0 2px 4px rgba(149, 117, 205, 0.3);
}

.cas-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}

.cas-1 {
  background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  box-shadow: 0 2px 4px rgba(46, 125, 50, 0.3);
}

.cas-2 {
  background: linear-gradient(135deg, #43a047 0%, #2e7d32 100%);
  box-shadow: 0 2px 4px rgba(67, 160, 71, 0.3);
}

.cas-3 {
  background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%);
  box-shadow: 0 2px 4px rgba(102, 187, 106, 0.3);
}

.cas-4 {
  background: linear-gradient(135deg, #81c784 0%, #66bb6a 100%);
  box-shadow: 0 2px 4px rgba(129, 199, 132, 0.3);
}

.item-full-name.no-short-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 0;
}

.item-full-name {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.6;
}

.item-url {
  font-size: 14px;
}

.item-url a {
  color: #1890ff;
  text-decoration: none;
  word-break: break-all;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.item-url a:hover {
  color: #40a9ff;
  text-decoration: underline;
}

.url-icon {
  font-size: 14px;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #999;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-text {
  font-size: 16px;
  color: #999;
}
</style>

