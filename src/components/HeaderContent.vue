<template>
  <div class="header-content">
    <div class="menu-controller" @click="toggleCollapse">
      <div class="menu-controller-item" v-if="menuCollapse">
        <i class="el-icon-s-unfold"></i>
      </div>
      <div class="menu-controller-item" v-else>
        <i class="el-icon-s-fold"></i>
      </div>
    </div>
    <div class="user-controller">
      <div class="message-box">
        <el-badge :value="12" class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
      </div>
      <el-dropdown trigger="click">
        <div class="user-info">
          <el-avatar shape="square" size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <p>Hyhang</p>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">用户设置</el-dropdown-item>
          <el-dropdown-item divided icon="el-icon-switch-button">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'header-content',
  computed: {
    ...mapState(['menuCollapse'])
  },
  methods: {
    toggleCollapse() {
      this.$store.dispatch('toggleCollapse')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header-content {
    position: relative;
    z-index: 5;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .menu-controller {
      height: 100%;
      display: flex;
      width: 60px;
      align-items: center;
      .menu-controller-item {
        cursor: pointer;
        height: 100%;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        .el-icon-s-unfold, .el-icon-s-fold {
          font-size: 24px;
          color: #333333;
        }
      }
      
    }
    .user-controller {
      display: flex;
      align-items: center;
      .message-box {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .el-icon-bell {
          font-size: 20px;
        }
      }
      .user-info {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 20px;
        p {
          line-height: 60px;
          margin-left: 5px;
        }        
      }
    }
    .menu-controller-item:hover,
    .user-info:hover,
    .message-box:hover {
      background-color: #e6e6e6;
    }
  }
</style>
