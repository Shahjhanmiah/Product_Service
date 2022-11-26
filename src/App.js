import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Main from './Layout/Main';
import Addproduct from './Page/Addproduct';
import Booking from './Page/Booking';
import CategoriesID from './Page/CategoriesID';
import Detailspage from './Page/Detailspage';
import Errorpage from './Page/Errorpage';
import Login from './Page/Login';
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
          path:'blog',
          element:<Blog></Blog>

        },
        
        // {
        //   path:'/home',
        //   element:<HomeCard></HomeCard> 
        // } ,
        {
          path:'/categories/:id',
          element:<CategoriesID></CategoriesID>,
          loader:({params})=>fetch(`http://localhost:5000/homes/${params.id}`),
          
        } ,
        {
          path:'/detailspage/:id',
          element:<Booking></Booking>,
          loader:({params})=>fetch(`http://localhost:5000/homes/${params.id}`)
          
        }
       
        
      ]
    },

  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
