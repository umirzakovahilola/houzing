import useId from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";


export const navbar=[
    {
        id:useId,
        element:<HomePage/>,
        title:'Home',
        path:'/home', 
        hidden:false,
        private:false},
    {
        id:useId,
        element:<PropertiesPage/>,
        title:'Properties',
        path:'/properties',
        hidden:false,
        private:false
    },
    {
        id:useId,
        element:<h1>Sign In</h1>,
        title:'signIn',
        path:'/signIn',
        hidden:true,
        private:false
    },
]
