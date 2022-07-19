# [vue3-status-indicator](https://github.com/guxuerui/vue3-status-indicator)

这是一个Vue3版本的状态指示灯组件, 受项目[vue-status-indicator](https://github.com/coderdiaz/vue-status-indicator#readme) 的启发，使用`vue3 + Ts + vite`

## 安装
```sh
# Install with pnpm
$ pnpm i -S vue3-status-indicator
# or npm
$ npm i -S vue3-status-indicator
```
## 使用

### 1. 导入
- 使用**局部导入**:
```ts
// 在.vue文件中
<script setup lang="ts">
  import { Vue3StatusIndicator } from 'vue3-status-indicator';
</script>
```
- 使用**全局导入**:
```ts
// 在main.ts中
import Vue3StatusIndicator from 'vue3-status-indicator';
app.use(Vue3StatusIndicator);

// 按需引入
import { Vue3StatusIndicator } from 'vue3-status-indicator';
app.component('custom-name', Vue3StatusIndicator);
```
### 2. 使用方式
- 方式一: 传入具体的色值
```html
primary: <Vue3StatusIndicator bg-color="#326CD6" class="mx-2"/>
success: <Vue3StatusIndicator bg-color="#4FAD59" class="mx-2"/>
error:   <Vue3StatusIndicator bg-color="#e4393c" class="mx-2"/>
warning: <Vue3StatusIndicator bg-color="orange" class="mx-2"/>
```
- 方式二: 使用默认的type
```html
primary: <Vue3StatusIndicator type="primary" class="mx-2"/>
success: <Vue3StatusIndicator type="success" class="mx-2"/>
error:   <Vue3StatusIndicator type="error" class="mx-2"/>
warning: <Vue3StatusIndicator type="warning" class="mx-2"/>
```

> Tips: 不建议两种方式同时使用, 否则会以传入的type为准

### 兼容性
支持最新版本的 `Chrome/Firefox/Safari`

### 属性/Props
|名称|描述|类型|默认|是否必须|
|---|---|---|---|---|
|type|默认提供的类型|String|""|false|
|bgColor|自定义色值|String|#326CD6|false|

## License
[MIT license](https://github.com/guxuerui/vue3-status-indicator/blob/main/LICENSE)
