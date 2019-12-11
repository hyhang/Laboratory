<template>
  <div>
    <router-view></router-view>
    <div class="footer">
      <div class="tip">
        请使用现代浏览器进行浏览，会获得更好的用户体验！
      </div>
      <div class="copyright">
        Copyright © 2019 Hyhang And Longgb
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-content'
}
</script>

<style lang="less" scoped>
  .footer {
    text-align: center;
    padding: 20px;
    .tip {
      margin-bottom: 10px;
      font-size: 14px;
    }
    .copyright {
      font-size: 12px;
    }
  }
</style>