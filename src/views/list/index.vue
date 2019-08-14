<template>
  <div class="app-container">
    <div class="app-list__block" :style="{display: !ifShowDetail ? 'block' : 'none'}">
      <el-button @click="add()" type="text" size="small">添加</el-button>
      <el-button @click="downloadJ()" type="text" size="small">testtesttest</el-button>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="ID" width="95">
          <template slot-scope="scope">{{ scope.$index }}</template>
        </el-table-column>
        <el-table-column label="Title">
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column label="Author" width="110" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Pageviews" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.pageviews }}</template>
        </el-table-column>
        <el-table-column class-name="status-col" label="Status" width="110" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="created_at" label="Display_time" width="200">
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span>{{ scope.row.display_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="field_15" label="操作" width="150">
          <template slot-scope="scope">
            <span>
              <el-button @click="detail(scope.row, 'detail')" type="text" size="small">详情</el-button>
              <el-button @click="detail(scope.row, 'update')" type="text" size="small">修改</el-button>
              <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: false,
      ifShowDetail: false
    };
  },
  watch: {
    $route: {
      handler: function(nVal, oVal) {
        this.ifShowDetail = nVal.name === "Detail";
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getList();
  },
  methods: {
    funDownload(content, filename) {
      var eleLink = document.createElement("a");
      eleLink.download = filename;
      eleLink.style.display = "none";
      // 字符内容转变成blob地址
      var blob = new Blob([content]);
      eleLink.href = URL.createObjectURL(blob);
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    },
    downloadJ() {
      let content = {
        id: '1',
        name: '1',
        children: [
          {
            id: '11',
            name: '11'
          },
          {
            id: '12',
            name: '12'
          }
        ]
      }
      this.funDownload(JSON.stringify(content), "test.json");
    },
    getList() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    add() {
      this.$router.push({ path: `/list/add` });
    },
    detail(item, type) {
      this.$router.push({
        path: `/list/${item.id}`,
        query: {
          type
        }
      });
    },
    remove(item) {}
  }
};
</script>
