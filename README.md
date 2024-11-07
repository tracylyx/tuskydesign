## npm + workspace
- npm run build -w @tuskdesign/zoo
- npm run serve -w @tuskdesign/zoo

## 给项目添加Nx
- npx nx@latest init

## nx.json 配置
- "dependsOn": ["^build"]
  - "^build" 表示项目依赖的build任务
  - 表示在任何项目上运行build任务，Nx都会首先未该项目的依赖运行build任务，然后才是运行项目自身的build任务
  - 这个关系可以通过`npx nx grpha`查看
  - 或者使用`npx nx run @tuskdesign/zoo:build --graph`查看依赖关系
  
## 关于Nx的插件

### @nx/js

添加它：`npx nx add @nx/js`，并移除各包中相同的task脚本配置

- 这样添加的@nx/js的版本会根据当前Nx的版本进行安装
- 安装结束会进行初始化

## 关于Nx的命令

- `npx nx reset`  清空缓存
  - 清空的文件夹：`.nx/workspace-data/`
- `npx nx @nx/js:lib packages/xxx`  通过插件@nx/js创建一个子包，会自动生成模板文件
- `npx nx add @nx/js` 添加@nx/js插件
- `npx nx run @tuskdesign/zoo:serve --graph` 以图表的形式查看`serve`任务依赖关系