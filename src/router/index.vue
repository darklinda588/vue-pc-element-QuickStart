<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-row>
      <el-col :span="24">
        <Carousel />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Menu, MenuItem, Submenu, Row, Col } from 'element-ui'
import Carousel from '../components/Carousel'

export default {
  name: 'index',
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu,
    [Row.name]: Row,
    [Col.name]: Col,
    Carousel
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
span{
    color: red;
}
</style>
