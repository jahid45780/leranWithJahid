import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Service from "../Service/Service";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element:<Home></Home>   
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/services',
          element:<Service/>
        }
      ]
    },
  ]);