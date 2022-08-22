import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="text-white container">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
