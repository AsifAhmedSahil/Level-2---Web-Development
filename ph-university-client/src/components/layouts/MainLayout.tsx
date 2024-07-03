
import { Outlet } from "react-router-dom";


import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
     
     <Sidebar/>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default MainLayout;
