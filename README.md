# 雅利恒员工手册门户（Vue 组件化多页面版）

本项目采用 **Vue 3 + Vite 多页面 MPA 架构**，不是单页应用（SPA），也没有使用 Vue Router。每个章节都有独立 HTML 入口，导航跳转会加载对应页面；页面内部使用 Vue 组件组合开发。

## 目录结构

```text
├── index.html                 # 总览页
├── culture.html               # 公司文化页
├── hiring.html                # 聘用制度页
├── attendance.html            # 考勤制度页
├── leave.html                 # 假期福利页
├── conduct.html               # 行为规范页
├── salary.html                # 薪酬制度页
├── offboarding.html           # 离职制度页
├── finance.html               # 财务报销页
├── closing.html               # 寄后语页
├── src
│   ├── App.vue                # 页面装配入口
│   ├── main.js                # 多页面通用挂载入口
│   ├── data/manual.js         # 员工手册数据源
│   ├── components
│   │   ├── layout             # 布局组件
│   │   ├── common             # 通用组件
│   │   └── manual             # 手册业务组件
│   ├── pages                  # 章节页面组件
│   └── styles/global.css      # 全局样式
```

## 运行

```bash
npm install
npm run dev
```

## 打包

```bash
npm run build
npm run preview
```

## 设计说明

- 多页面结构：每个章节是独立入口 HTML。
- 组件化：布局、导航、搜索、卡片、表格、时间轴、手风琴、章节页均拆分。
- 数据化：员工手册内容集中维护在 `src/data/manual.js`。
- 搜索：侧边栏全局搜索会检索所有章节，并跳转到对应独立页面。
- 导出：顶部和寄后语页提供浏览器打印 / 导出 PDF。
- 移动端：侧边栏自动变为抽屉菜单。
- 深色模式：保存在当前浏览器会话中。

## 特别说明

手册目录中出现“住宿”，但正文未提供具体条款，本项目未编造内容，只在福利说明中标注“正文未提供具体住宿条款，后续可新增”。
