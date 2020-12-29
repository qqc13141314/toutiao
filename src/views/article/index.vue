<template>
  <div class="article-container">
    <!-- 面包屑导航栏 -->
    <el-card class="box-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <!-- 面包屑导航栏 -->

    <!-- 信息筛选模块 -->

    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="状态：">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
            <el-radio label="已删除"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="html" value="shanghai"></el-option>
            <el-option label="" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="日期：">
          <el-date-picker
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 信息筛选模块 -->

    <el-card class="show-card1">
      根据筛选共查询到{{}}条结果
    </el-card>
    <el-card class="show-card2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="cover" label="封面" width="180">
          <el-image class="coverimg"></el-image>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 0" type="primary">草稿</el-tag>
            <el-tag v-else-if="scope.row.status === 1" type="warning"
              >待审核</el-tag
            >
            <el-tag v-else-if="scope.row.status === 2" type="success"
              >审核通过</el-tag
            >
            <el-tag v-else-if="scope.row.status === 3" type="danger"
              >审核失败</el-tag
            >
            <el-tag v-else-if="scope.row.status === 4" type="info"
              >已删除</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布时间"> </el-table-column>
        <el-table-column prop="operation" label="操作">
          <el-button
            size="mini"
            type="primary"
            plain
            circle
            @click="handleEdit(scope.$index, scope.row)"
            ><i class="el-icon-edit"></i
          ></el-button>
          <el-button
            size="mini"
            type="danger"
            plain
            circle
            @click="handleDelete(scope.$index, scope.row)"
            ><i class="el-icon-delete"></i
          ></el-button>
        </el-table-column>
      </el-table>
      <!-- 信息展示模块 -->
      <!-- 分页栏 -->
      <el-pagination
        class="fenye"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
      <!-- 分页栏 -->
    </el-card>
    <!-- 信息展示模块 -->
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
export default {
  name: "articles",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      articles: [],
      tableData: [
        {
          cover: "",
          title: "测试标题",
          status: "审核通过",
          pubdate: "2019-09-09 12:00:07",
          operation: "",
        },

        {
          cover: "./loginform.jpg",
          title: "测试标题",
          status: "审核通过",
          pubdate: "2019-09-09 12:00:07",
          operation: "",
        },

        {
          cover: "./loginform.jpg",
          title: "测试标题",
          status: "审核通过",
          pubdate: "2019-09-09 12:00:07",
          operation: "",
        },
        {
          cover: "./loginform.jpg",
          title: "测试标题",
          status: "审核通过",
          pubdate: "2019-09-09 12:00:07",
          operation: "",
        },
        {
          cover: "./loginform.jpg",
          title: "测试标题",
          status: "审核通过",
          pubdate: "2019-09-09 12:00:07",
          operation: "",
        },
        {
          cover: "./loginform.jpg",
          title: "测试标题",
          status: "审核通过",
          pubdate: "2019-09-09 12:00:07",
          operation: "",
        },
      ],
    };
  },
  created() {
    this.loadarticles();
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    loadarticles() {
      getArticles().then((res) => {
        console.log(res);
        this.articles = res.data.data.results;
      });
    },
  },
};
</script>

<style scoped lang="less" scoped>
.show-card1 {
  margin-top: 15px;
}
.shou-card2 {
  .coverimg {
    width: 50px;
    height: 30px;
  }
  .fenye {
    display: block;
    float: right;
  }
}
</style>
