# vue-photo-swipe

基于photoswipe实现的vue图片预览组件

### 安装

1 第一步
```
npm instatll VuePhotoSwipe -D
```
2 第二步

vue 入口文件
``` javascript
import Vue from 'vue'
import VuePhotoSwipe from 'vue-photo-swipe'
import 'VuePhotoSwipe/dist/vue-photo-swipe.css'
Vue.use(VuePhotoSwipe)
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
### demo

[demo](https://zhhshen.github.io/vue-photo-swipe/example/index.html)
###  LICENSE

MIT

