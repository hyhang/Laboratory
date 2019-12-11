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
import MainContent from '../../components/MainContent'
import HeaderContent from '../../components/HeaderContent'
import LeftMenu from '../../components/LeftMenu'
import routes from '../../router/index'

export default {
  name: 'layout',
  components: {
    MainContent,
    HeaderContent,
    LeftMenu
  },
  data() {
    return {
      routes,
      fullPathObj: {
        fullPath: '',
        primaryPath: '',
        list: [],
        getNav(routes) {
          routes.forEach(route => {
            this.fullPath = route.path
            this.__getCNav(route)
          })
        },
        __getCNav(route) {
          if (route.children) {
            route.children.forEach(route => {
              let lastPath = this.fullPath
              this.fullPath += `/${route.path}`
              this.primaryPath = lastPath
              this.__getCNav(route)
            })
          } else {
            this.list.push({fullPath: this.fullPath})
            this.fullPath = this.primaryPath
            return
          }
        }
      }
    }
  },
  mounted() {
    this.fullPathObj.getNav(this.routes.options.routes)
    console.log(this.fullPathObj.list)
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
