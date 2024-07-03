import { ReactNode } from "react";

export type TSidebarItems = {
    key: string;
    label: ReactNode;
    children?: TSidebarItems[];
  };

 export type TRoutes = {
    path: string;
    element: ReactNode;
  };

export type TUSerPaths = {
    name:string,
    path?:string,
    element?:ReactNode,
    children?: TUSerPaths[]
}