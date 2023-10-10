import { Outlet } from "react-router-dom";
import Header from "./Header";

// Main layout component for rendering nested routes
export const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
};
