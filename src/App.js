import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Main from './Layout/Main';
import CategoriesID from './Page/CategoriesID';
import HomeCard from './Page/HomeCard';
import Login from './Page/Login';
import Search from './Page/Search';
import Signup from './Page/Signup';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element:<Search></Search>
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
