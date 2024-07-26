import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import Section from "../Section/Section";

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
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
export default Layout;
