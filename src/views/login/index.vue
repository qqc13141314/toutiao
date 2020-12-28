<template>
  <div id="login-container">
    <el-form lass="login-form" ref="login-form" :model="user" :rules="rules">
      <h3>今日头条后台管理系统</h3>
      <el-form-item prop="mobile">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="请输入手机号"
          v-model="user.mobile"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          prefix-icon="el-icon-unlock"
          placeholder="请输入密码"
          v-model="user.code"
        ></el-input>
      </el-form-item>

      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意用户协议</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          v-loading="loginLoading"
          element-loading-text="登陆中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          @click="onLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/user.js";
export default {
  name: "login",
  data() {
    return {
      user: {
        mobile: "13911111111",
        code: "246810",
        agree: false,
      },
      loginLoading: false,

      rules: {
        mobile: [
          // 添加正则表达式 pattern: /^1[3|5|7|8|9]\d{9}$/，验证手机号是否正确
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: "请输入正确的号码格式",
            trigger: "change",
          },
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "change" },
          {
            pattern: /^\d{6}$/,
            message: "请输入正确的验证码",
            trigger: "change",
          },
        ],

        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback();
              } else {
                callback(new Error("请勾选用户协议"));
              }
            },
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onLogin() {
      //获取表单数据

      //表单验证
      this.$refs["login-form"].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      //验证通过，请求登录

      //处理登录后结果
    },

    login() {
      this.loginLoading = "true";
      login(this.user)
        .then((res) => {
          console.log(res);
          this.$message({
            showClose: true,
            message: "登陆成功",
            type: "success",
          });
          this.loginLoading = false;
        })
        .catch((err) => {
          console.log("登陆失败", err);
          this.$message({
            showClose: true,
            message: "登陆失败，手机号或验证码错误",
            type: "error",
          });
          this.loginLoading = false;
        });
    },
  },
};
</script>

<style lang="less">
#login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("./loginform.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form,
.el-form {
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  padding: 30px 50px;
  background: url("./loginform.jpg");
  background-size: 33.3% 33.3%;
  .login-btn {
    width: 100%;
  }
}
h3 {
  color: chocolate;
  font-size: 30px;
}
</style>
