import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
         { path: "/dashboard",
          element: <Dashboard />,
        },
         { path: "/addStudent",
          element: <AddStudent />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;