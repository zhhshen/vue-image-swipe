# vue-image-swipe

基于photoswipe实现的vue图片预览组件

### 安装

1 第一步
```
npm install vue-image-swipe -D
```
2 第二步

vue 入口文件引入

``` javascript
import Vue from 'vue'
import VueImageSwipe from 'vue-image-swipe'
import 'vue-image-swipe/dist/vue-image-swipe.css'
Vue.use(VueImageSwipe)
```

### 使用

```
<template>
<div>
  hello world
  <div>
    <ul>
      <li
        :key="index"
        @click="preview(index)"
        v-for="(l, index) in images">
         <img :src="l" alt="">
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      images: [
        'http://oayhezji6.bkt.clouddn.com/preview1.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview2.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview3.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview9.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview10.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview6.jpg'
      ]
    }
  },
  created() {
  },
  methods: {
    preview(index) {
      this.$imagePreview({
        images: this.images,
        index: index,
      })
    }
  }
}
</script>
```
### methods

只暴露了一个方法**this.$imagePreview**，并绑定到vue的原型上
使用
```
this.$imagePreview(options = {})
```
options有三个参数

参数 | 默认值 | 说明
--- | ---| ---
images | 空数组 | 图片的url数组
index | 0 | 预览图片的索引值, 默认是0
defaultOpt | {} | 配置项

defaultOpt 的配置项请参考[photoswipe配置项](http://photoswipe.com/documentation/options.html)，
**注意：不能保证所有配置项都是可用的**

列举一些常用的配置
```
defaultOpt: {
  fullscreenEl: true,
  shareEl: false,
  arrowEl: true,
  preloaderEl: true,
  loop: false,
  bgOpacity: 0.85,
  showHideOpacity: true,
  errorMsg: '<div class="pswp__error-msg">图片加载失败</div>',
}
```
### demo

[demo](https://zhhshen.github.io/vue-image-swipe/example/index.html)
###  LICENSE

MIT
