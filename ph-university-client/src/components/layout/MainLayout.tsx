import { Button, Layout } from 'antd';
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';

import {  Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';

const { Header, Content } = Layout;


const MainLayout = () => {
  const dispatch = useAppDispatch()

const handleLogout = () =>{
  toast.success("log out user successfully")
  dispatch(logout())
}
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Header style={{ padding: 0 }} ><Button onClick={handleLogout}>Log Out</Button></Header>
        <Content style={{ margin: '24px 16px 0' }}>
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
