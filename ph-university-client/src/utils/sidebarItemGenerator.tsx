import { NavLink } from "react-router-dom";
import { TSidebarItems, TUSerPaths } from "../types";

export const sidebarItemGenerator = (items : TUSerPaths[],role:string) =>{
     const sidebarItem = items.reduce(
        (acc: TSidebarItems[], item) => {
          if (item.path && item.name) {
            acc.push({
              key: item.name,
              label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            });
          }
      
          if (item.children) {
            acc.push({
              key: item.name,
              label: item.name,
              children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
              })),
            });
          }
      
          return acc;
        },
        []
      );
      return sidebarItem
}