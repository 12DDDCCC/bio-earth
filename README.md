# Bio-Earth 科普物种可视化平台

一个基于 Vue 3 + Cesium 的生物分类可视化平台，支持 1000+ 科普物种的展示、搜索和 3D 地球分布可视化。

![Bio-Earth Preview](https://img.shields.io/badge/Vue-3.4-green) ![Cesium](https://img.shields.io/badge/Cesium-1.139-blue) ![License](https://img.shields.io/badge/license-MIT-yellow)

## 功能特性

- **3D 地球可视化**：基于 Cesium 的离线 3D 地球，支持旋转、缩放
- **生物分类树**：左侧 8 级分类结构（域 → 界 → 门 → 纲 → 目 → 科 → 属 → 种）
- **物种搜索**：支持中英文名称实时搜索
- **物种详情**：点击物种查看详细信息、分布、栖息地等
- **大陆图例**：直观展示物种分布区域
- **离线运行**：不依赖外部在线地图服务

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue 3 | ^3.4.0 | 前端框架 |
| Vite | ^5.0.0 | 构建工具 |
| Pinia | ^2.1.0 | 状态管理 |
| Cesium | ^1.139.1 | 3D 地球 |
| Vue Router | ^4.0.0 | 路由 |

## 项目结构

```
bio-earth/
├── public/
│   ├── cesium/                     # Cesium 静态资源 (~23MB)
│   └── data/
│       ├── taxonomy/               # 生物分类数据
│       │   ├── kingdoms.json       # 界级分类
│       │   ├── phylum_classes.json # 门-纲数据
│       │   ├── class_orders.json   # 纲-目数据
│       │   ├── order_families.json # 目-科数据
│       │   ├── family_genera.json  # 科-属数据
│       │   └── genus_species/       # [未上传，数据包约2.2GB]
│       └── geography/              # 地理数据
├── src/
│   ├── components/                  # Vue 组件
│   ├── stores/                      # Pinia 状态管理
│   ├── utils/                      # 工具函数
│   ├── router/                     # 路由配置
│   ├── App.vue                     # 根组件
│   └── main.js                     # 应用入口
├── index.html
├── vite.config.js
└── package.json
```

## 数据文件说明

### taxonomy 数据

本仓库仅上传了核心分类数据结构文件（约 21MB）：

| 文件 | 大小 | 说明 |
|------|------|------|
| `kingdoms.json` | ~40KB | 界级分类 |
| `phylum_classes.json` | ~70KB | 门-纲对应关系 |
| `class_orders.json` | ~240KB | 纲-目对应关系 |
| `order_families.json` | ~1.6MB | 目-科对应关系 |
| `family_genera.json` | ~19MB | 科-属对应关系 |

> **genus_species 数据包（约 2.2GB）未上传**，如需完整数据请单独下载或联系作者。

### geography 数据

地理数据位于 `public/data/geography/`，包含山脉、河流、湖泊、沙漠等地理信息。

## 分类等级

| 英文 | 中文 | 说明 |
|------|------|------|
| domain | 域 | 最高级（真核生物域、细菌域） |
| kingdom | 界 | 动物界、植物界、真菌界等 |
| phylum | 门 | 脊索动物门、节肢动物门等 |
| class | 纲 | 哺乳纲、鸟纲、昆虫纲等 |
| order | 目 | 灵长目、食肉目、鳞翅目等 |
| family | 科 | 猫科、犬科、人科等 |
| genus | 属 | 豹属、犬属、人属等 |
| species | 种 | 具体物种 |

## License

MIT License - 详见 [LICENSE](LICENSE) 文件
