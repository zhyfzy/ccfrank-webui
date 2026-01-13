<template>
  <div class="sidebar" :class="{ 'sidebar-visible': visible }">
    <div class="sidebar-header">
      <h2>目录</h2>
      <button class="close-button" @click="$emit('close')">✕</button>
    </div>
    <button 
      v-if="!showHomePage"
      class="back-home-button" 
      @click="$emit('back-to-home')"
    >
      🏠 返回首页
    </button>
    <div class="sidebar-content">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-item"
      >
        <div
          class="category-title"
          :class="{ active: selectedCategory === category.id }"
          @click="toggleCategory(category.id)"
        >
          {{ category.name }}
        </div>
        <div
          v-if="expandedCategories.includes(category.id)"
          class="sub-items"
        >
          <div
            v-for="(subItem, index) in category.subItems"
            :key="index"
            class="sub-item"
            :class="{ active: selectedCategory === category.id && selectedSubItem === subItem }"
            @click="selectItem(category.id, subItem)"
          >
            {{ subItem }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { categories } from '../utils/dataParser.js'

const props = defineProps({
  selectedCategory: String,
  selectedSubItem: String,
  visible: {
    type: Boolean,
    default: true
  },
  showHomePage: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select', 'close', 'back-to-home'])

// 默认展开所有分类的二级目录
const expandedCategories = ref(categories.map(cat => cat.id))

const toggleCategory = (categoryId) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}

const selectItem = (categoryId, subItem) => {
  emit('select', { category: categoryId, subItem })
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  z-index: 999;
  transition: transform 0.3s ease;
  overscroll-behavior: contain;
}

@media (max-width: 767px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar.sidebar-visible {
    transform: translateX(0);
  }
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.close-button {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-button:hover {
  background-color: #f0f0f0;
  color: #333;
}

@media (max-width: 767px) {
  .close-button {
    display: block;
  }
}

.back-home-button {
  width: calc(100% - 32px);
  margin: 16px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}

.back-home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
}

.back-home-button:active {
  transform: translateY(0);
}

.sidebar-content {
  padding: 10px 0;
}

.category-item {
  margin-bottom: 4px;
}

.category-title {
  padding: 12px 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  transition: all 0.2s;
  user-select: none;
}

.category-title:hover {
  background-color: #f5f5f5;
  color: #1890ff;
}

.category-title.active {
  background-color: #e6f7ff;
  color: #1890ff;
  border-right: 3px solid #1890ff;
}

.sub-items {
  background-color: #fafafa;
}

.sub-item {
  padding: 10px 20px 10px 40px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.2s;
}

.sub-item:hover {
  background-color: #f0f0f0;
  color: #1890ff;
}

.sub-item.active {
  background-color: #e6f7ff;
  color: #1890ff;
  font-weight: 500;
}
</style>

