import { Dashboard } from "../UI/pages";
import { MainLayout } from "../layout/mainLayout/main.layout";

// Define main application routes
export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Dashboard/> }],
  },
];
