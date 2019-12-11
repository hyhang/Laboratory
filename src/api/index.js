import ajax from './ajax'

const BASE = '/api'

export const reqTodoList = () => ajax({
  url: BASE + '/todo'
})

export const createTodo = (newTodo) => ajax({
  method: 'POST',
  url: BASE + '/todo',
  data: {
    ...newTodo
  }
})

export const finishTodo = (id) => ajax({
  method: 'POST',
  url: BASE + '/todo/finish',
  data: {
    id
  }
})

export const delTodo = (id) => ajax({
  method: 'POST',
  url: BASE + '/todo/del',
  data: {
    id
  }
})

//用户名密码登录
export const reqPwdLogin = ({ name, pwd, captcha  }) => ajax({
  method: 'POST',
  url: BASE + '/login_pwd',
  data: {
    name,
    pwd,
    captcha
  }
})

//手机验证码登录
export const reqCodeLogin = ({ phone, code }) => ajax({
  method: 'POST',
  url: BASE + '/login_sms',
  data: {
    phone,
    code
  }
})
