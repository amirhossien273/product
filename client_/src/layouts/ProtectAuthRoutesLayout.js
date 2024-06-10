import { Navigate, Outlet } from "react-router-dom";

const ProtectAuthRoutesLayout = () => {


  
  
    
    // return <>{auth.status == "success"  ? <Navigate to={DefaultRoute} />  : auth.status == "false" ? <Outlet /> : <>sss</>}</>;
  
    return <><Outlet /></>;
  };
  
  export default ProtectAuthRoutesLayout;