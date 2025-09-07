import React from 'react'
import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import Home from "./pages/student/Home";
import CoursesList from "./pages/student/CoursesList";
import CourseDetail from "./pages/student/CorseDetail"
import MyEnrollment from './pages/student/MyEnrollment';
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educater from "./pages/educator/Educater";
import Deshboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import MyCourses from "./pages/educator/MyCourses";



const App = () => {
  
const Router=createBrowserRouter([
  {
   path:"/",
   element:<Home/>
  },
  {
    path:"/courseslist",
    element:<CoursesList/>
  },
   {
    path:"/courseslist/:input",
    element:<CoursesList/>
  },
    {
    path:"/course/:id",
    element:<CourseDetail/>
  },
  {
    path:"/myenrollment",
    element:<MyEnrollment/>
  },
   {
    path:"/player/:courseId",
    element:<Player/>
  },
   {
    path:"/loading/:path",
    element:<Loading/>
  },
    {
    path:"/educater",
    element:<Educater/>,
    children:[
       {
    path:"deshboard",
    element:<Deshboard/>
  },
  {
    path:"addcourse",
    element:<AddCourse/>
  },
  {
    path:"studentsenrolled",
    element:<StudentsEnrolled/>
  },
   {
    path:"mycourses",
    element:<MyCourses/>
  },
    ]
  },
    
     
]
)
  return (
    <div>
     <RouterProvider router={Router}></RouterProvider>
    </div>
  )
}

export default App




// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import Contact from './pages/Contact'
// import Country from './pages/Country'
// import About from './pages/About'
// import Home from './pages/Home'
// import Layout from './applayout/Layout'
// import Countrydetals from './pages/Countrydetals'

// const router=createBrowserRouter([
//   {
//    path:"/",
//    element:<Layout/>,
   
//    children:[
//      {
//     path:"/",
//     element:<Home/>
//   },
//    {
//     path:"about",
//     element:<About/>
//   },
//    {
//     path:"country",
//     element:<Country/>
//   },
//   {
//     path:"country/:id",
//     element:<Countrydetals/>
//   },
//    {
//     path:"contact",
//     element:<Contact/>
//   },
//   ]
//   },
 
// ])


// function App() {
  

//   return (
//     <>
//     <div className='bg-black text-white'>
//      <RouterProvider router={router}></RouterProvider>
//     </div>
//     </>
//   )
// }

// export default App

