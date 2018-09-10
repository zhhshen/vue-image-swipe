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
<style scoped>
img {
  width: 200px;
}
</style>


