import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="emstetiques-app">
      <Outlet />
    </div>
  );
}

export default MainLayout;