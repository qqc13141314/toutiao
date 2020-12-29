<template>
  <div>
    <el-card class="box-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>素材管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>

    <el-card>
      <div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="收藏"></el-radio-button>
        </el-radio-group>
      </div>
      <el-row :gutter="10" class="imgshow">
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>

        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image> </el-col
        ><el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image> </el-col
        ><el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>

        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>

        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="4" :sm="6" :md="6" :lg="4">
          <el-image
            style=" height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
          ></el-image>
        </el-col>
      </el-row>
      <!-- 分页栏 -->
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
      <!-- 分页栏 -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "image",
  data() {
    return {
      radio1: "全部",
      radio2: "收藏",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less" scoped>
.imgshow {
  margin-top: 20px;
  .el-image__inner {
    margin-top: 20px;
  }
}
</style>
