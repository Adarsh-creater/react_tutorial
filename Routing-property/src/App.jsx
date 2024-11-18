
import './App.css'
import { createBrowserRouter,
  RouterProvider, } from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Paracontant from './component/Paracontant';
import Root from './component/Root';
import Course from './component/course';
import Test from './component/test';
import Notfound from './component/Notfound';


const router = createBrowserRouter([
  {
    path:'/',
    element : <div>
       <Navbar/>
       <Home/>
    </div>

  },
  {
    path:'/about',
    element : <div>
       <Navbar/>
       <About/>
      </div>
  },
  {
    path:'/contact',
    element : <div>
       <Navbar/>
       <Contact/>
       </div>,
       children :[
        {
          path: 'Test',
          element:<Test/>

        },{
          path: 'Course',
          element:<Course/>
        },{
          path: 'Root',
          element:<Root/>
        }
       ]

  },
  {
    path:'*',
    element:<Notfound/>
  },
  {
    path: '/stu/:id',
    element : <div>
       <Navbar/>
      <Paracontant/>
       </div>
  }


])  

function App() {


  return (
   <div>
    <RouterProvider router={router} />
  
   </div>
  )
}

export default App
