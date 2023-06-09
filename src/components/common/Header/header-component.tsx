import { useState } from "react";
import { ProfitLogo } from "src/assets/images";
import {
  HeaderContainer,
  HeaderLogoImg,
  HeaderSection,
  Menu,
  MenuBtn,
  MenuItemsLink,
  MenuList,
  MenuListItems,
  MenuPhoneBtn,
  NavbarItems,
  NavbarItemsLink,
  NavbarList,
} from "./header-style";
import { SvgIcon } from "src/components/svgIcon";

const MenuComponent = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Menu className={isOpen ? "nav-menu active" : "nav-menu"}>
      <MenuBtn className="menu-btn" onClick={() => setIsOpen(!isOpen)} />

      <MenuList>
        <MenuListItems>
          <MenuItemsLink href="/">Услуги</MenuItemsLink>
        </MenuListItems>
        <MenuListItems>
          <MenuItemsLink href="/">Как мы работаем</MenuItemsLink>
        </MenuListItems>
        <MenuListItems>
          <MenuItemsLink href="/">Результат</MenuItemsLink>
        </MenuListItems>
        <MenuListItems>
          <MenuItemsLink href="/">Заказать</MenuItemsLink>
        </MenuListItems>
      </MenuList>

      <MenuPhoneBtn href="tel:+998977777777">
        <SvgIcon iconName="logo" width="33" height="33" />
      </MenuPhoneBtn>
    </Menu>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderSection>
      <HeaderContainer className="container">
        <NavbarItemsLink href="/">
          <HeaderLogoImg
            src={ProfitLogo}
            alt="header-logo"
            width={118}
            height={118}
          />
        </NavbarItemsLink>

        <NavbarList>
          <NavbarItems>
            <NavbarItemsLink href="/">Услуги</NavbarItemsLink>
          </NavbarItems>
          <NavbarItems>
            <NavbarItemsLink href="/">Как мы работаем</NavbarItemsLink>
          </NavbarItems>
          <NavbarItems>
            <NavbarItemsLink href="/">Результат</NavbarItemsLink>
          </NavbarItems>
          <NavbarItems>
            <NavbarItemsLink href="/">Заказать</NavbarItemsLink>
          </NavbarItems>
        </NavbarList>

        <MenuBtn
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </HeaderContainer>

      <MenuComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderSection>
  );
};

export default Header;
