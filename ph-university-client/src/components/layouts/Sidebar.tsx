import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const userRole = {
  ADMIN:'admin',
  FACULTY:'faculty',
  STUDENT:'student',
}


const Sidebar = () => {

  const role = 'admin'

  let sidebarItems ;

  switch (role) {
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