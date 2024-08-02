
import { TRoute, TUserRoute } from "../types/sidebar.types";

export const routesGenerator = (items : TUserRoute[]) =>{
    const routes = items.reduce((acc: TRoute[], item) => {
        if (item.path && item.element) {
          acc.push({
            path: item.path,
            element: item.element,
          });
        }
      
        if (item.children) {
          item.children.forEach((child) => {
            acc.push({
              path: child.path!,
              element: child.element,
            });
          });
        }
      
        return acc;
      }, []);
      return routes
}