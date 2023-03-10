import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import PrivateRoute from './context/PrivateRoute';
import Home from './Home/Home';
import Main from './Layout/Main';
import Addproduct from './Page/Addproduct';
import Advertisedetails from './Page/Advertisedetails';
import Allbayers from './Page/Allbayers';
import Allsellers from './Page/Allsellers';
import Alluser from './Page/Allsellers';
import Booking from './Page/Booking';
import CategoriesID from './Page/CategoriesID';
import Dashboard from './Page/Dashboard';
import Errorpage from './Page/Errorpage';
import Login from './Page/Login';
import Myorders from './Page/Myorders';
import MyProduct from './Page/MyProduct';
import Payment from './Page/Create';
import Signup from './Page/Signup';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage />,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        } ,
        {
          path:'/search',
          element:<Addproduct></Addproduct>
        } ,
        {
          path:'/allselar',
          element:<PrivateRoute><Allbayers></Allbayers></PrivateRoute>
        } ,
        {
          path:' /blog',
          element:<Blog></Blog>

        },

        {
          path:' /payment',
          element:<Payment></Payment>

        },
        {
          path:' /addver',
          element:<Advertisedetails></Advertisedetails>
          

        },
        {
          path:'/product',
          element:<MyProduct></MyProduct>
        },
        
        // {
        //   path:'/home',
        //   element:<HomeCard></HomeCard> 
        // } ,
        {
          path:'/categories/:id',
          element:<CategoriesID></CategoriesID>,
          loader:({params})=>fetch(`https://server-swart-nine.vercel.app/homes/${params.id}`),
          
        } ,

        {
          path:'/detailspage/:id',
          element:<Booking></Booking>,
          loader:({params})=>fetch(`https://server-swart-nine.vercel.app/homes/${params.id}`)
          
        },
        {
          path:'/alluser',
          element:<PrivateRoute><Allsellers></Allsellers></PrivateRoute>
        },
       
        {
          path:'/myorder',
          element:<PrivateRoute><Myorders></Myorders></PrivateRoute>
        },
       
        
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element:<Addproduct></Addproduct>
        },
        {
          path:'/dashboard/product',
          element:<MyProduct></MyProduct>
        },
       
        {
          path:'/dashboard/myorder',
          element:<PrivateRoute><Dashboard><Myorders></Myorders></Dashboard></PrivateRoute>
        },
        {
          path:'/dashboard/product',
          element:<MyProduct></MyProduct>
        },
        {
          path:'/dashboard/allselar',
          element:<Allbayers></Allbayers>
        },
        {
          path:'/dashboard/allselar',
          element:<PrivateRoute><Allsellers></Allsellers></PrivateRoute>
        },
       

      ]
    }

  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
