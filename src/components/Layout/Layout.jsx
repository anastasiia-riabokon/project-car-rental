import {Outlet} from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import Section from "../Section/Section";
import {Suspense} from "react";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <header className="bg-[#3470FF] rounded-b-xl">
        <Container>
          <Navbar />
        </Container>
      </header>

      <Section>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};
export default Layout;
