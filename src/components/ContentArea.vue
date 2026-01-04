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
      </div>
    </div>
    <div class="content-header">
      <div class="level-buttons">
        <button
          v-for="level in ['A', 'B', 'C']"
          :key="level"
          class="level-button"
          :class="{ active: selectedLevel === level }"
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
        :class="{ active: selectedLevel === level }"
      >
        <h2 class="level-title">{{ level }}类</h2>
        <div v-if="currentData && currentData[level] && currentData[level].length > 0" class="items-list">
          <div
            v-for="(item, index) in currentData[level]"
            :key="index"
            class="item-card"
          >
            <div v-if="item.name" class="item-name">{{ item.name }}</div>
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

defineEmits(['toggle-sidebar'])

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
  flex: 1;
}

@media (max-width: 767px) {
  .level-buttons {
    gap: 8px;
  }
}

.level-button {
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #e0e0e0;
  background-color: #fff;
  color: #666;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;
}

@media (max-width: 767px) {
  .level-button {
    padding: 8px 12px;
    font-size: 14px;
  }
}

.level-button:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.level-button.active {
  background-color: #1890ff;
  border-color: #1890ff;
  color: #fff;
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

