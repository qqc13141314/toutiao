<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <asider class="aside-menu" :is-collapse="isCollapse"></asider>
    </el-aside>
    <!-- 侧边栏 -->
    <el-container>
      <!-- header -->
      <el-header class="header">
        <div>
          <i
            :class="{
              'el-icon-s-fold': isCollapse,
              'el-icon-s-unfold': !isCollapse,
            }"
            @click="isCollapse = !isCollapse"
          ></i>
          &nbsp;
          <span>今日头条后台管理系统</span>
        </div>
        <div class="usersetting">
          <img class="userimg" src="./user.jpg" alt="" />
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              用户昵称<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- header -->

      <!-- main -->
      <el-main><router-view></router-view></el-main>
      <!--main -->
    </el-container>
  </el-container>
</template>

<script>
import asider from "./components/aside.vue";
import { getUserProfile } from "@/api/user.js";
export default {
  name: "layout",
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    asider,
  },
  created() {
    //组件初始化好，请求获取用户资料
    this.loadUserProfile();
  },
  mounted() {},
  methods: {
    loadUserProfile() {
      getUserProfile().then((res) => {
        console.log(res);
      });
    },

    logout() {
      this.$confirm("即将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #ccc;

  line-height: 200px;

  .el-menu {
    height: 100%;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

/* header 样式 */

.el-header {
  background-color: #b3c0d1;
  color: rgb(68, 64, 64);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 20px;
  }
}

.usersetting {
  display: flex;
  align-items: center;
  .userimg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

/* header 样式 */
</style>
