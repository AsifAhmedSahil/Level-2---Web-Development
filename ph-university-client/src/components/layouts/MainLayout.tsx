import { Layout, Menu, MenuProps } from 'antd'
const { Header, Sider, Content,Footer } = Layout;



const items :MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard"
  },
  {
    key: "2",
    label: "Profile"
  },
  {
    key: "3",
    label: "User Management"
  },
]
   

const MainLayout = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color: 'white', textAlign: 'center', height: '4rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}>PH Uni</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              
            }}
          >
            The main content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
