import Login from "../../authComponents/Login";
import Register from "../../authComponents/Register";
import Home from "../../homeComponents/Home";

 const routesData=[

    {path:"/",component:<Home/>},
    {path:"/login",component:<Login/>},
    {path:"/register",component:<Register/>},

] 

export default routesData