// ** Reducers Imports
import signin from "./auth/login";
import auth from "./auth/auth";
import signup from "./auth/register";

const rootReducer = {
    signin,
    auth,
    signup,
};

export default rootReducer;