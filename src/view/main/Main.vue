<template>
  <div class="layout">
    <router-view name="tmpView"></router-view>
    <Layout>
      <Header>
        <Menu v-on:on-select="handleClick" mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">XXXX-管理平台</div>
          <div class="layout-nav">
            <MenuItem name="subSys">
              <Icon type="ios-navigate"></Icon>
              子系统
            </MenuItem>
            <MenuItem name="welcome">
              <Icon type="ios-keypad"></Icon>
              欢迎您，admin
            </MenuItem>
            <MenuItem name="logout">
              <Icon type="ios-analytics"></Icon>
              退出系统
            </MenuItem>
          </div>
        </Menu>
      </Header>

      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-0" theme="light" width="auto" :open-names="['1','4']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                基础信息管理
              </template>
              <MenuItem name="1-0" to="/hii">公告管理</MenuItem>
              <MenuItem name="1-1" to="/tmp">终端设备管理</MenuItem>
              <MenuItem name="1-2" to="/admin">管理员信息管理</MenuItem>
              <MenuItem name="1-3">应用信息管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                交易管理
              </template>
              <MenuItem name="2-1">交易记录</MenuItem>
              <MenuItem name="2-2">交易限额</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                统计分析
              </template>
              <MenuItem name="3-1">日统计分析</MenuItem>
              <MenuItem name="3-2">月统计分析</MenuItem>
            </Submenu>

            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-bug"/>
                演示示例
              </template>
              <MenuItem name="4-1" to="/iview">iView部分组件演示</MenuItem>
              <MenuItem name="4-2">其它演示</MenuItem>
              <MenuItem name="4-3" to="/vue">Vue 学习总结</MenuItem>
            </Submenu>
          </Menu>
        </Sider>

        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem v-for="item in BreadcrumbItem" v-bind:key="item">{{item}}</BreadcrumbItem>
          </Breadcrumb>

          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <keep-alive>
              <router-view name="content"></router-view>
            </keep-alive>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'

  export default {
    name: "Main",
    data() {
      return {
        BreadcrumbItem: []
      }
    },
    components: {HelloWorld},
    watch: {
      $route(to, from) {
        if (to.path === '/iview') {
          this.BreadcrumbItem = ['演示示例', 'iView部分组件演示']
        } else if (to.path === '/hii') {
          this.BreadcrumbItem = ['基础信息管理', '公告管理']
        } else if (to.path === '/admin') {
          this.BreadcrumbItem = ['基础信息管理', '管理员信息管理']
        } else {
          this.BreadcrumbItem = []
        }
      },

    },
    methods: {
      test() {
        alert('3')
      },
      logout() {
        this.$router.push({name: 'login'})
      },
      handleClick(name) {
        switch (name) {
          case 'logout':
            this.logout();
            break;
        }
      }
    },
    // router
  }
</script>

<style scoped>
  .layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    /* width: 100px; */
    height: 30px;
    color: white;
    font-weight: bold;
    font-size: 22px;
    /* background: #5b6270; */
    border-radius: 3px;
    float: left;
    position: relative;
    /* top: 15px; */
    /* left: 20px; */
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
