import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <p>HOME</p>,
    errorElement: <p>Not FOUND</p>,
  },
  {
    path: "/videos",
    element: <p>VIDEOS </p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
