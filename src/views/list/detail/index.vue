<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="单行">
        <el-input v-model="form.field_1566179845693" />
      </el-form-item>
			<el-form-item label="多行">
        <el-input v-model="form.field_1566179862123" type="textarea" />
      </el-form-item>
      <el-form-item label="数字">
        <el-input v-model="form.field_1566179865938" />
      </el-form-item>
			<el-form-item label="日期">
				<el-date-picker v-model="form.field_1566179868815" type="date" placeholder="选择日期" />
			</el-form-item>
			<el-form-item label="时间">
				<el-date-picker v-model="form.field_1566180269979" type="datetime" placeholder="选择日期时间"></el-date-picker>
			</el-form-item>
			<el-form-item label="开始时间-结束时间">
				<el-date-picker
					v-model="form.field_1566179870979"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="开始时间-结束时间">
				<el-date-picker
					v-model="form.field_1566180293281"
					type="datetimerange"
					range-separator="至"
					start-placeholder="开始时间"
					end-placeholder="结束时间">
				</el-date-picker>
			</el-form-item>
      <el-form-item label="网址">
        <el-input v-model="form.field_1566179873570" />
      </el-form-item>
			<el-form-item label="单选">
        <el-radio-group v-model="form.field_1566180320386">
          <el-radio label="单选一" value="单选一" />
          <el-radio label="单选二" value="单选二" />
          <el-radio label="单选三" value="单选三" />
        </el-radio-group>
      </el-form-item>
			<el-form-item label="多选">
				<el-checkbox-group v-model="form.field_1566180324828">
          <el-checkbox label="多选1" value="多选1" name="type" />
          <el-checkbox label="多选2" value="多选2" name="type" />
          <el-checkbox label="多选3" value="多选3" name="type" />
        </el-checkbox-group>
      </el-form-item>
			<el-form-item label="下拉单选">
        <el-select v-model="form.field_1566180331282" placeholder="请选择">
          <el-option label="下拉单选1" value="下拉单选1" />
          <el-option label="下拉单选2" value="下拉单选2" />
          <el-option label="下拉单选3" value="下拉单选3" />
        </el-select>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="form.field_1566180337689" />
      </el-form-item>
      <el-form-item label="文件">
        <el-input v-model="form.field_1566180339661" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.field_1566180343386" />
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.field_1566180345062" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.field_1566180347719" />
      </el-form-item>
		
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      type: '',
      form: {
        field_1566179845693: '',
        field_1566179862123: '',
        field_1566179865938: '',
        field_1566179868815: '',
        field_1566180269979: '',
        field_1566179870979: '',
        field_1566180293281: '',
        field_1566179873570: '',
        field_1566180320386: '',
        field_1566180324828: '',
        field_1566180331282: '',
        field_1566180337689: '',
        field_1566180339661: '',
        field_1566180343386: '',
        field_1566180345062: '',
        field_1566180347719: '',
      }
    }
  },
  created() {
    this.id = this.$route.params.id
    this.type = this.id === 'add' ? this.id : this.$route.query.type
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>