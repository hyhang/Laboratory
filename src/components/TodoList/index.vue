<template>
  <div>
    <el-dialog
      title="待办事项"
      :visible.sync="todoListDialogVisible"
      width="60%"
      @open="getTodoList"
      center>
      <div v-loading="loading">
         <el-table
          :data="TodoDates"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="160">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="status"
            label="完成状态"
            width="90">
            <template slot-scope="scope">
              <el-tag size="mini" type="danger" v-if="scope.row.status === 0">未完成</el-tag>
              <el-tag size="mini" type="success" v-if="scope.row.status === 1">已完成</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="content"
            label="事项内容">
          </el-table-column>
          <el-table-column
            prop="status"
            label="操作"
            width="160">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="deleteTodo(scope.row._id)">删除</el-button>
              <el-button type="primary" size="mini" @click="finishedTodo(scope.row._id)">完成</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer">
        <el-button size="mini" @click="todoListDialogVisible = false">关 闭</el-button>
        <el-button size="mini" type="primary" @click="showAddTodo">新 增</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="新增待办事项"
      :visible.sync="addTodoDialogVisible"
      width="40%"
      center>
      <div v-loading="loading">
        <el-input v-model="newTodo.content" size="mini" placeholder="请填写您要新增的待办事项"/>
      </div>
      <span slot="footer">
        <el-button size="mini" @click="addTodoDialogVisible = false">关 闭</el-button>
        <el-button size="mini" type="primary" @click="addTodo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { reqTodoList, createTodo, finishTodo, delTodo } from '../../api/index'

export default {
  data() {
    return {
      todoListDialogVisible: false,
      addTodoDialogVisible: false,
      loading: true,
      TodoDates: [],
      newTodo: {
        content: '',
        status: 0
      }
    }
  },
  methods: {
    openTodoList() {
      this.todoListDialogVisible = !this.todoListDialogVisible
    },
    refrenshTodoList() {
      this.$bus.$emit('refrensh-todo-list')
    },
    addTodo() {
      createTodo(this.newTodo)
        .then(res => {
          this.loading = true
          if (res.status === 0) {
            this.loading = false
            this.addTodoDialogVisible = false
            this.newTodo.content = ''
            this.getTodoList()
            this.refrenshTodoList()
          }
        })
    },
    showAddTodo() {
      this.addTodoDialogVisible = true;
    },
    getTodoList() {
      this.loading = true
      reqTodoList()
        .then(res => {
          if (res.status === 0) {
            this.TodoDates = res.data
            this.loading = false
          }
        })
        .catch(() => {
          this.loading = false
        })
    },
    deleteTodo(id) {
      this.loading = true
      delTodo(id)
        .then(res => {
          if (res.status === 0) {
            this.loading = false
            this.getTodoList()
            this.refrenshTodoList()
          }
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    },
    finishedTodo(id) {
      this.loading = true
      finishTodo(id)
        .then(res => {
          if (res.status === 0) {
            this.loading = false
            this.getTodoList()
            this.refrenshTodoList()
          }
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
  .todo-list {
    li {
      margin-bottom: 10px;
      .el-tag {
        margin-right: 5px;
      }
    }
  }
  /deep/ .el-dialog__footer {
    text-align: end;
  }
</style>