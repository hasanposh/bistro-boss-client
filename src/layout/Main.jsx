import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation()
  console.log(location)
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')  
  return (
    <div>

      {/* nav */}
      {noHeaderFooter || <NavBar />}
      {/* outelet */}
      <Outlet />
      {/* footer */}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
