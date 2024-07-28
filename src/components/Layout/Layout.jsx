import {Outlet} from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import {Suspense} from "react";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#3470FF]">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="bg-[#3470FF] text-white text-center p-4">
        <p>&copy; 2024 Car Rental Ukraine. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Layout;
