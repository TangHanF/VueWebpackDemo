<template>
  <div>
    <Row>
      <Col span="10">
        <Card>
          <p slot="title">按钮</p>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <br><br>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>
          <br>
          <br>
          <RadioGroup v-model="buttonSize" type="button">
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">small</Radio>
          </RadioGroup>
          <br><br>
          <Button :size="buttonSize" type="primary">Primary</Button>
          <Button :size="buttonSize" type="default">Default</Button>
          <Button :size="buttonSize" type="dashed">Dashed</Button>
          <Button :size="buttonSize" type="text">Text</Button>
          <br><br>
          <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
          <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
          <br><br>
          <ButtonGroup :size="buttonSize">
            <Button :size="buttonSize" type="primary">
              <Icon type="ios-arrow-back" />
              Backward
            </Button>
            <Button :size="buttonSize" type="primary">
              Forward
              <Icon type="ios-arrow-forward" />
            </Button>
          </ButtonGroup>
        </Card>
      </Col>

      <Col span="10" offset="1">
        <Card>
          <p slot="title">标签页</p>
          <Tabs>
            <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
            <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
            <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
          </Tabs>
        </Card>
      </Col>


      <Col span="10" offset="1">
        <Card>
          <p slot="title">菜单导航</p>
          <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
              <Icon type="ios-paper" />
              内容管理
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-people" />
              用户管理
            </MenuItem>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
            <MenuItem name="4">
              <Icon type="ios-construct" />
              综合设置
            </MenuItem>
          </Menu>
          <br>
          <p>Change theme</p>
          <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
          </RadioGroup>
        </Card>
      </Col>
    </Row>
  </div>

</template>

<script>
  export default {
    name: "IViewDemoPage",
    data() {
      return {
        buttonSize: 'large',
        theme1: 'light'
      }
    },
  }
</script>

<style scoped>

</style>
