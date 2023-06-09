import {
  MainLayoutBody,
  MainLayoutContainer,
  MainLayoutSection,
} from "./main-layout.style";
import Header from "../Header/header-component";
import { generalRoutes } from "src/constants/general-components.constant";
import Footer from "../Footer/footer-component";

const MainLayout = () => {
  return (
    <MainLayoutBody>
      <Header />
      <MainLayoutSection>
        <MainLayoutContainer className="container">
          {generalRoutes?.map(
            ({ component }: { component: React.ReactNode }, index: number) => {
              return <div key={index}>{component}</div>;
            }
          )}
        </MainLayoutContainer>
      </MainLayoutSection>
      <Footer />
    </MainLayoutBody>
  );
};

export default MainLayout;
