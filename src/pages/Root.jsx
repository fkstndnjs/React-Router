import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      {/* Outlet에는 Root의 하위 라우터(children)의 컴포넌트들이 돌아가면서 마운트됨 */}
      <Outlet />
    </div>
  );
}
