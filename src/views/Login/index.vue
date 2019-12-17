<template>
  <div id="login">
    <el-form :model="loginForm" class="login-form" label-width="auto" :rules="rules">
      <div class="form-header">登录</div>
      <el-form-item label="帐号：" prop="account">
        <el-input v-model="loginForm.account" size="small" placeholder="请输入账户"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="loginForm.password" size="small" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button @click="userLogin" size="small" type="primary" style="width: 100%">登录</el-button>
      <div class="tip">
        <span class="register">
          <span>还没有账号？</span>
          <router-link to="/register">去注册</router-link>
        </span>
        <a href="#">忘记密码</a>
      </div>
      <div class="oauth-box">
        <div>第三方登录：</div>
        <div class="oauth">
          <div class="oauth-bg">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" alt="微博">
          </div>
          <div class="oauth-bg">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" alt="微信">
          </div>
          <div class="oauth-bg">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" alt="Github">
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import rules from '@/assets/js/rules.js'
import { login } from '@/api'

export default {
  name: 'login',
  data() {
    return {
      rules,
      loginForm: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin() {
      login(this.loginForm)
        .then(data => {
          if (data.status === 0) {
            this.$router.replace('/')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
  #login {
    height: 100vh;
    width: 100vw;
    position: relative;
    background: #f0f2f5 url(../../assets/images/background.svg) no-repeat 50%;
    .login-form {
      position: absolute;
      right: 50%;
      left: 50%;
      transform: translateX(-50%);
      top: 120px;
      width: 240px;
      height: 320px;
      background-color: #ffffff;
      padding: 20px;
      z-index: 3;
      border-radius: 3px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      .form-header {
        height: 30px;
        width: 100%;
        color: rgba(0, 0, 0, 0.8);
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      }
      .tip {
        margin-top: 10px;
        display: flex;
        color: rgba(0, 0, 0, 0.8);
        justify-content: space-between;
        font-size: 14px;
        a {
          text-decoration: none;
        }
      }
      .oauth-box {
        font-size: 14px;
        margin-top: 20px;
        color: rgba(0, 0, 0, 0.8);
        .oauth {
          margin-top: 15px;
          display: flex;
          justify-content: space-around;
          .oauth-bg {
            cursor: pointer;
            background-color: #f4f8fb;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            img {
              width: 22px;
              height: 22px;
              transition: 0.1s;
            }
          }
          .oauth-bg:hover {
            img {
              width: 23px;
              height: 23px;
            }
          }
        }
      }
    }
  }
</style>
