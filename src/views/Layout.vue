<template>
  <el-container style="width: 100%; height: 100%;">
    <LeftMenu/>
    <el-container>
      <el-header>
        <HeaderContent/>
      </el-header>
      <el-main class="content">
        <MainContent/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MainContent from '../components/MainContent.vue'
import HeaderContent from '../components/HeaderContent.vue'
import LeftMenu from '../components/LeftMenu.vue'

export default {
  name: 'layout',
  components: {
    MainContent,
    HeaderContent,
    LeftMenu
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    position: relative;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    padding: 0;
  }
  .content {
    background-color: #eeeeee;
    height: 100%;
    width: 100%;
  }
</style>
