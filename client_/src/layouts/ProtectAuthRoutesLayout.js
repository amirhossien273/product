import { Navigate, Outlet } from "react-router-dom";

const ProtectAuthRoutesLayout = () => {


  
  const user = localStorage.getItem("user-token")
  ? JSON.parse(localStorage.getItem("user-token"))
  : null ;
    
  return <>{user == null   ? <Navigate to={'/auth/login'} />  : <Outlet /> }</>;
  
    // return <><Outlet /></>;
  };
  
  export default ProtectAuthRoutesLayout;