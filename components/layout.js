import { useRouter } from "next/router";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const router = useRouter();
  const showNavBar = router.pathname === "/login" ? false : true;
  return (
    <>
      {showNavBar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
