import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // index가 true인 컴포넌트는 Root의 Outlet에 기본으로 보여짐
      { index: true, element: <Home /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
  // 이쪽에 path를 새로 작성하면 Root의 Outlet이 아니라 여기서 설정해준 새로운 컴포넌트가 Root대신 마운트됨
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
