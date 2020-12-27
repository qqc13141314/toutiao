<template>
  <div id="login-container">
    <el-form class="login-form" ref="user" :model="user">
      <h3>今日头条后台管理系统</h3>
      <el-form-item>
        <el-input
          prefix-icon="el-icon-user"
          placeholder="请输入手机号"
          v-model="user.name"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          prefix-icon="el-icon-unlock"
          placeholder="请输入密码"
          v-model="user.password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less">
#login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  background: url("./background.jpg");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  padding: 30px 50px;
  background: url("./background.jpg");
  background-size: 100% 100%;
  .login-btn {
    width: 100%;
  }
}
h3 {
  color: chocolate;
  font-size: 30px;
}
</style>
