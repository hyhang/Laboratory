<template>
  <div>
    <div class="page-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/laboratory/workspace' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
        <el-breadcrumb-item>工作台</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="user-banner">
        <div class="avatar">
          <el-avatar shape="circle" :size="72" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <div class="welcome">
            <h3>欢迎您，Hyhang！</h3>
            <p>前端工程师 | 某某集团 - 某某项目组</p>
          </div>
        </div>
        <div class="weather">
          <h3>今日气温</h3>
          <span class="local">
            <span>
              <i class="el-icon-location-outline"></i>
              <span>北京</span>
            </span>
            <span>
              <i class="el-icon-cloudy"></i>
              <span>多云 | 气温3℃</span>
            </span>
          </span>
        </div>
        <div class="login-time">
          <span class="current">
            <span class="title">本次登录时间：</span>
            <span class="time">2019-11-28 8:03:56</span>
          </span>
          <span class="last">
            <span class="title">上次登录时间：</span>
            <span class="time">2019-11-27 18:03:56</span>
          </span>
        </div>
      </div>
    </div>
    <div class="page-main">
      <div class="left-content">
        <el-card class="box-card laboratory-list" shadow="never">
          <div slot="header" class="clearfix">
            <span>我参与的模拟实验</span>
            <el-button style="float: right; padding: 3px 0" type="text">全部实验</el-button>
          </div>
          <div v-for="(item, index) in laboratory" :key="index" class="laboratory">
            <div class="laboratory-title">
              <el-avatar shape="circle" :size="36" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <p class="title">{{item.title}}</p>
            </div>
            <p class="laboratory-desc">{{item.description}}</p>
            <div class="department">
              <span><a href="#">{{item.department}}</a></span>
              <span>9小时前</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="right-content">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
          </div>
          <div v-for="o in 4" :key="o" class="todo-item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace',
  data() {
    return {
      laboratory: [
        {title:'数值模拟', department: '科学搬砖组', img_path: './images/1.png', description: '那是一种内在的东西， 他们到达不了，也无法触及的'},
        {title:'应用模拟', department: '科学搬砖组', img_path: './images/8.png', description: '希望是一个好东西，也许是最好的，好东西是不会消亡的'},
        {title:'云端模拟', department: '科学搬砖组', img_path: './images/3.png', description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆'},
        {title:'仿真模拟', department: '科学搬砖组', img_path: './images/4.png', description: '那时候我只会想自己想要什么，从不想自己拥有什么'},
        {title:'库存模拟', department: '科学搬砖组', img_path: './images/5.png', description: '凛冬将至'},
        {title:'场景模拟', department: '科学搬砖组', img_path: './images/7.png', description: '生命就像一盒巧克力，结果往往出人意料'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .page-header {
    background-color: #ffffff;
    margin: -20px -20px 20px;
    box-sizing: border-box;
    padding: 20px;
    .user-banner {
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      .avatar {
        display: flex;
        .welcome {
          box-sizing: border-box;
          padding: 10px 0;
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h3 {
            font-size: 20px;
            color: #333333;
          }
        }
      }
      .weather {
        box-sizing: border-box;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          font-size: 20px;
          color: #333333;
        }
        .local {
          i {
            vertical-align: middle;
            color: #1989FA;
          }
          span {
            margin-right: 10px;
            i {
              margin-right: 5px;
            }
          }
        }
      }
      .login-time {
        box-sizing: border-box;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          color: #333333;
        }
        .time {
          color: #1989FA;
        }
      }
    }
  }
  .page-main {
    display: flex;
    flex-wrap: wrap;
    .box-card {
      border-radius: 0;
      margin-bottom: 20px;
    }
    .left-content {
      width: 65%;
      margin-right: 20px;
      .laboratory-list {
        /deep/ .el-card__body {
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          background-color: #eeeeee;
        }
        .laboratory {
          position: relative;
          float: left;
          margin: 0 1px 1px 0;
          box-sizing: border-box;
          padding: 20px;
          flex-grow: 1;
          width: 30%;
          height: 140px;
          background-color: #ffffff;
          transition: all 0.3s;
          .el-avatar {
            margin-right: 10px;
          }
          .laboratory-title {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            .title {
              font-weight: bold;
            }
          }
          .laboratory-desc {
            font-size: 14px;
            line-height: 1.5;
            color: rgba(0, 0, 0, 0.45)
          }
          .department {
            position: absolute;
            bottom: 10px;
            left: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
            color: rgba(0, 0, 0, 0.45);
            span {
              font-size: 12px;
              a {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.45);
                text-decoration: none;
              }
              a:hover {
                color: #1989FA;
              }
            }
          }
        }
        .laboratory:hover {
          position: relative;
          z-index: 1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
      }
    }
    .right-content {
      width: 30%;
      flex-grow: 1;
      .todo-item {
        line-height: 1.5;
      }
    }
  }
</style>