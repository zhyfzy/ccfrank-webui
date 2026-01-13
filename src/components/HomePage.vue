<template>
  <div class="home-page">
    <div class="home-header">
      <button class="menu-button" @click="$emit('toggle-sidebar')">☰</button>
      <div class="header-content">
        <h1 class="main-title">中国计算机学会推荐国际学术会议和期刊目录（2022）</h1>
        <p class="subtitle">选择一个领域和类型开始浏览</p>
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
    
    <div class="home-container">
      <div class="category-grid">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="category-card"
        >
          <h2 class="category-name">{{ category.name }}</h2>
          <div class="sub-items">
            <button 
              class="sub-item-btn conference-btn"
              @click="handleSelect(category.id, '会议')"
            >
              📄 会议
            </button>
            <button 
              class="sub-item-btn journal-btn"
              @click="handleSelect(category.id, '期刊')"
            >
              📚 期刊
            </button>
          </div>
        </div>
      </div>
      
      <footer class="home-footer">
        <p class="footer-text">
          <a 
            href="https://github.com/zhyfzy/ccfrank-webui" 
            target="_blank" 
            rel="noopener noreferrer"
            class="footer-link"
          >
            <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor" style="vertical-align: text-bottom; margin-right: 6px;">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            GitHub
          </a>
          <span class="separator">•</span>
          基于 CCF 推荐国际学术会议和期刊目录（2022）
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { categories } from '../utils/dataParser.js'

const emit = defineEmits(['select', 'toggle-sidebar'])

const handleSelect = (categoryId, subItem) => {
  emit('select', { category: categoryId, subItem })
}
</script>

<style scoped>
.home-page {
  margin-left: 280px;
  width: calc(100% - 280px);
  min-height: 100vh;
  background-color: #f5f5f5;
}

@media (max-width: 767px) {
  .home-page {
    margin-left: 0;
    width: 100%;
  }
}

.home-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
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
  .menu-button {
    display: block;
  }
  
  .home-header {
    padding: 15px 20px;
  }
  
  .github-link svg {
    width: 24px;
    height: 24px;
  }
}

.header-content {
  flex: 1;
}

.main-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.subtitle {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 1.4;
  margin: 0;
}

.home-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  border: 1px solid #e8e8e8;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border-color: #1890ff;
}

.category-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
  padding-bottom: 12px;
  border-bottom: 2px solid #e8e8e8;
}

.sub-items {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.sub-item-btn {
  flex: 1;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
}

.conference-btn {
  color: #1890ff;
  border-color: #1890ff;
}

.conference-btn:hover {
  background-color: #1890ff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.3);
}

.journal-btn {
  color: #f5576c;
  border-color: #f5576c;
}

.journal-btn:hover {
  background-color: #f5576c;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(245, 87, 108, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-container {
    padding: 20px;
  }

  .main-title {
    font-size: 20px;
  }

  .subtitle {
    font-size: 14px;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .category-card {
    padding: 16px;
  }

  .category-name {
    font-size: 16px;
  }

  .sub-item-btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}

.home-footer {
  text-align: center;
  padding: 30px 20px;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;
  margin-top: 40px;
}

.footer-text {
  margin: 0;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #1890ff;
}

.separator {
  color: #d9d9d9;
  margin: 0 4px;
}

@media (max-width: 480px) {
  .sub-items {
    flex-direction: column;
  }
  
  .footer-text {
    font-size: 13px;
    flex-direction: column;
    gap: 6px;
  }
  
  .separator {
    display: none;
  }
}
</style>
