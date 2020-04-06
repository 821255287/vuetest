<template>
  <div class="login-container" v-title data-title="Vue电商项目">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录区 -->
      <el-form
        label-width="0px"
        class="loginForm"
        :model="loginForm"
        :rules="loginRule"
        ref="loginRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="fa fa-user-circle-o fa-1x" v-model="loginForm.username"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-s-goods" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      //这是登录的表单对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    resetLoginForm() {
      // this.$refs.resetFields();
      // console.log(this);
      this.$refs.loginRef.resetFields()
    },
    login() {
      this.$refs.loginRef.validate(async valid => {
        // console.log(valid);
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        //1、将登录成功后的token,保存到客户端的SessionStoage 中
        //1.1 项目中除了登录之外的其他API接口，必须在登录之后才能访问
        //1.2 token只应在当前网站打开期间生效，所以将token保存在seeionStoage

        window.sessionStorage.setItem('token', res.data.token)
        //2页面跳转
        this.$router.push('/home')
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //页面标题
  directives: {
    title: {
      inserted: function(el, binding) {
        document.title = el.dataset.title
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.login-container {
  background-color: #2b4b6b;
  width: 100%;
  height: 100%;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .btns {
      display: flex;
      justify-content: flex-end; //右对齐
    }
    .loginForm {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 25px;
      box-sizing: border-box;
    }
    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
</style>