<template>
  <div id="register">
    <el-form :model="registerForm" class="register-form" label-width="auto" :rules="rules">
      <div class="form-header">注册</div>
      <el-form-item label="帐号：" prop="account">
        <el-input v-model="registerForm.account" size="small" placeholder="请输入账户"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="registerForm.password" size="small" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="重复密码：" prop="rePassword">
        <el-input type="password" v-model="registerForm.rePassword" size="small" placeholder="请重复输入密码"></el-input>
      </el-form-item>
      <el-button size="small" type="primary" style="width: 100%" @click="registerAccount">注册</el-button>
      <div class="tip">
        <router-link to="/login">已有账号登陆</router-link>
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
import { register } from '@/api'

export default {
  name: 'register',
  data() {
    return {
      rules,
      registerForm: {
        account: '',
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    registerAccount() {
      const { account, password } = this.registerForm
      register({ account, password }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #register {
    height: 100vh;
    width: 100vw;
    position: relative;
    background: #f0f2f5 url(../../assets/images/background.svg) no-repeat 50%;
    .register-form {
      position: absolute;
      right: 50%;
      left: 50%;
      transform: translateX(-50%);
      top: 120px;
      width: 240px;
      height: 370px;
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
        justify-content: center;
        font-size: 14px;
        a {
          text-decoration: none;
        }
      }
      .oauth-box {
        font-size: 14px;
        margin-top: 10px;
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
