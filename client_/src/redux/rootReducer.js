// ** Reducers Imports
import signin from "./auth/login";
import auth from "./auth/auth";
import signup from "./auth/register";
import product from "./products/list";
import comment from "./comments/store";

const rootReducer = {
    signin,
    auth,
    signup,
    product,
    comment
};

export default rootReducer;