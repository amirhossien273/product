import { Navigate, Outlet } from "react-router-dom";

const ProtectPublicRoutesLayout = () => {


  
  const user = localStorage.getItem("user-token")
  ? JSON.parse(localStorage.getItem("user-token"))
  : null ;
    
  return <>{user !== null   ? <Navigate to={'/products'} />  : <Outlet /> }</>;
  
    // return <><Outlet /></>;
  };
  
  export default ProtectPublicRoutesLayout;