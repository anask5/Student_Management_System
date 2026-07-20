import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Dashboard_Student from "./pages/Dashboard_Student";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Students from "./pages/Students";
import DeleteStudent from "./pages/DeleteStudent";

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
        },
         { path: "/students",
          element: <Students />,
        },
         { path: "/updateStudent",
          element: <EditStudent />,
        },
         { path: "/deleteStudent",
          element: <DeleteStudent />,
        },
         { path: "/dashboard_student",
          element: <Dashboard_Student />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;