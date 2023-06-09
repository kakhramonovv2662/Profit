import {
  NavbarItems,
  NavbarItemsLink,
  NavbarList,
} from "../Header/header-style";
import { FooterContainer, FooterSecton } from "./footer-style";

const Footer = () => {
  return (
    <FooterSecton>
      <FooterContainer className="container">
        <NavbarList className="footer-list">
          <NavbarItems>
            <NavbarItemsLink className="footer-list-item" href="/">
              Услуги
            </NavbarItemsLink>
          </NavbarItems>
          <NavbarItems>
            <NavbarItemsLink className="footer-list-item" href="/">
              Как мы работаем
            </NavbarItemsLink>
          </NavbarItems>
          <NavbarItems>
            <NavbarItemsLink className="footer-list-item" href="/">
              Результат
            </NavbarItemsLink>
          </NavbarItems>
          <NavbarItems>
            <NavbarItemsLink className="footer-list-item" href="/">
              Заказать
            </NavbarItemsLink>
          </NavbarItems>
        </NavbarList>
      </FooterContainer>
    </FooterSecton>
  );
};

export default Footer;
