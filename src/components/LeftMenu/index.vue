<template>
  <el-menu 
    :default-active="defaultActive"
    class="left-menu"
    text-color="#aaa"
    router
    :collapse="menuCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">仪表盘</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/laboratory/workspace">工作台</el-menu-item>
        <el-menu-item index="/laboratory/analyse">分析页</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/laboratory/mock1">
      <i class="el-icon-menu"></i>
      <span slot="title">应用模拟</span>
    </el-menu-item>
    <el-menu-item index="/laboratory/mock2">
      <i class="el-icon-document"></i>
      <span slot="title">数值模拟</span>
    </el-menu-item>
    <el-menu-item index="/laboratory/setting">
      <i class="el-icon-setting"></i>
      <span slot="title">用户设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'left-menu',
  data() {
    return {
      defaultActive: '/laboratory/workspace'
    }
  },
  computed: {
    ...mapState(['menuCollapse'])
  },
  mounted() {
    this.defaultActive = this.$route.path
  }
}
</script>

<style lang="less" scoped>
  .left-menu {
    height: 100%;
  }
  .left-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    background-color: #000C17;
  }
  .el-menu-item-group {
    background-color: #001529;
  }
  .el-menu-item.is-active {
    background-color: #52C41A;
    color: #ffffff;
    outline: 0;
  }
  /deep/ .el-submenu__title:hover, .el-menu-item:not(.is-active):hover {
    outline: 0;
    background-color: #001529;
    color: #ffffff;
    span {
      color: #ffffff;
    }
  }
</style>