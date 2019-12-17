export default {
  account: [
    { required: true, message: '请输入帐号', trigger: 'blur'},
    { min: 4, max: 8, message: '帐号长度在4到8个字符', trigger: 'change'}
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur'},
    { min: 6, max: 16, message: '密码长度在6到16个字符', trigger: 'change'}
  ],
  rePassword: [
    { required: true, message: '请输入密码', trigger: 'blur'},
    { min: 6, max: 16, message: '密码长度在6到16个字符', trigger: 'change'}
  ]
}