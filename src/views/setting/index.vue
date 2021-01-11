<template>
  <div>
    <!--    empty-text="当前没有数据" -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      stripe
      border
      height="250"
      ref="singleTable"
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <!-- sortable  在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。 -->
      <el-table-column fixed sortable prop="date" label="日期" width="180">
      </el-table-column>
      <!-- 对齐方式left/center/right -->
      <!-- 表头对齐方式，若不设置该项，则使用表格的对齐方式 -->
      <el-table-column
        prop="name"
        sortable
        align="right"
        label="姓名"
        width="180"
        header-align="center"
      >
      </el-table-column>
      <!-- 当内容过长被隐藏时显示 tooltip -->
      <!--  show-overflow-tooltip -->
      <el-table-column sortable prop="address" label="地址">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.address }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-tooltip content="Delete" placement="top">
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, tableData)"
              @click="
                deleteApi([{ server_asset_id: scope.row.server_asset_id }])
              "
              >Delete</el-button
            ></el-tooltip
          >
          <!--   <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            size="small"
          >
            移除
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top=30px">
      <el-button type="success" @click="dialogVisible = true" modal="false"
        >添加</el-button
      >
      <el-button
        class="delall-btn"
        type="danger"
        @click="batchDelete"
        :disabled="batchDeleteArr.length === 0"
        >批量删除</el-button
      >
      <el-button type="info" @click="toggleSelection()">重置</el-button>
    </div>

    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
      <!-- 内容的主体区域 -->
      <el-form :model="form">
        <el-form-item label="日期" size="mini">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" size="mini">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" size="mini">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <!-- @click.native.prevent="addInfo"???? -->
        <el-button type="primary" @click.native="addInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      tableData: [
        {
          date: "1999-05-02",
          name: "尼库拉斯-奥斯特洛夫斯基",
          address:
            "俄罗斯符拉迪沃斯托克-远东军事基地2俄罗斯符拉迪沃斯托克-远东军事基地3俄罗斯符拉迪沃斯托克-远东军事基地",
        },
        {
          date: "1987-05-04",
          name: "尼米兹",
          address: "美利坚合众国海军司令部",
        },
        {
          date: "2000-05-01",
          name: "魏凤和",
          address: "中华人民共和国北京市军区司令部",
        },
        {
          date: "2016-05-03",
          name: "朱可夫",
          address: "苏联莫斯科国防部",
        },
      ],
      search: "",

      batchDeleteArr: [],
      dialogVisible: false,
      form: [
        {
          name: "",
          date: "",
          address: "",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleEdit(index, row) {
      alert(index, row);
      this.dialogVisible = "true";
    },
    handleDelete(index, rows) {
      rows.splice(index, 1);
    },
    /*  deleteRow(index, rows) {
      rows.splice(index, 1);
    }, */
    formatter(row, column) {
      return row.address;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.batchDeleteArr = val;
    },

    batchDelete() {
      let deleteData = this.batchDeleteArr.map((item) => {
        const { server_asset_id } = item;
        return { server_asset_id };
      });
      this.deleteApi(deleteData);
    },
  },

  deleteApi(data) {
    const _this = this;
    this.$confirm("确定删除？", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(async () => {
      const response = await _this.$post(server_asset_info_del.url, data);
      this.$message({
        message: response.msg,
        type: "success",
        duration: 1500,
        onClose: function() {
          let form = {
            page: _this.page,
            limit: _this.limit,
          };
          _this.getData(form);
        },
      });
    });
  },
  addInfo() {
    this.dialogVisible = "false";
    console.log("111");
  },
};
</script>

<style scoped lang="less">
.el-table .warning-row {
  background: rgb(214, 186, 132);
}

.el-table .success-row {
  background: #69dc2b;
}

.delall-btn {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
