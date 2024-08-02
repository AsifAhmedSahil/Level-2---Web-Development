import { Layout, Menu} from 'antd';
import { sidebarItemGenerator } from '../../utils/sidebarItemGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
const {  Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student'
}

const Sidebar = () => {
  
  const user = useAppSelector(selectCurrentUser)
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths,userRole.ADMIN)
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPaths,userRole.FACULTY)
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(adminPaths,userRole.STUDENT)
      break;
  
    default:
      break;
  }


  return (
    <Sider
       
      >
        <div
          style={{
            color: 'white',

            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={sidebarItems}
        />
      </Sider>
  )
}

export default Sidebar