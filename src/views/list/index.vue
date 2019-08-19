<template>
  <div class="app-container">
    <div class="app-list__block" :style="{display: !ifShowDetail ? 'block' : 'none'}">
      <el-button type="text" size="small" @click="add()">添加</el-button>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
			
				<el-table-column align="center" label="id">
					<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>
			
				<el-table-column align="center" label="标题">
					<template slot-scope="scope">{{ scope.row.title }}</template>
				</el-table-column>
			
				<el-table-column align="center" label="作者">
					<template slot-scope="scope">{{ scope.row.author }}</template>
				</el-table-column>
			
				<el-table-column align="center" label="添加时间">
					<template slot-scope="scope">{{ scope.row.display_time | momentFormat('YYYY-MM-DD HH:mm:ss') }}</template>
				</el-table-column>
			
        <el-table-column prop="field_15" label="操作" width="150">
          <template slot-scope="scope">
            <span>
              <el-button type="text" size="small" @click="detail(scope.row, 'detail')">详情</el-button>
              <el-button type="text" size="small" @click="detail(scope.row, 'update')">修改</el-button>
              <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
            </span>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getList } from "@/api/table"

export default {
  data() {
    return {
      list: null,
      listLoading: false,
      ifShowDetail: false
    }
  },
  watch: {
    $route: {
      handler: function(nVal, oVal) {
        this.ifShowDetail = nVal.name === "Detail"
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    add() {
      this.$router.push({ path: `/list/add` })
    },
    detail(item, type) {
      this.$router.push({
        path: `/list/${item.id}`,
        query: {
          type
        }
      })
    },
    remove(item) {}
  }
}
</script>
