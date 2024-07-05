import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectRecentUser, TUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN:'admin',
  FACULTY:'faculty',
  STUDENT:'student',
}


const Sidebar = () => {

  // const role = 'admin'
  const user = useAppSelector(selectRecentUser) as TUser

  let sidebarItems ;

  switch (user.role)  {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths,userRole.ADMIN)
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPaths,userRole.FACULTY)
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(studentPaths,userRole.STUDENT)
      break;
    
    
  
    default:
      break;
  }

  

  return (
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
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          PH Uni
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
  )
}

export default Sidebar