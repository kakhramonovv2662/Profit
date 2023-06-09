import styled from "styled-components";

// HEADER STYLES

export const HeaderSection = styled.header`
  position: relative;

  .nav-menu {
    max-width: 70%;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: fixed;
    z-index: 2;
    background-color: #fff;
    text-align: right;
    top: 0;
    right: -100%;
    transition: 0.3s ease;
    overflow-y: auto;
  }

  @media only screen and (max-width: 961px) {
  }

  @media only screen and (max-width: 540px) {
    .nav-menu.active {
      right: 0;
      transition: 0.3s ease;
    }
  }

  @media only screen and (max-width: 460px) {
    .nav-menu {
      max-width: 100%;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 961px) {
    justify-content: space-around;
  }
`;

export const HeaderLogoImg = styled.img``;

export const NavbarList = styled.ul`
  display: flex;

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const NavbarItems = styled.li`
  padding: 0 60px;

  @media only screen and (max-width: 973px) {
    padding: 0 47.5px;
  }

  @media only screen and (max-width: 871px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 650px) {
    padding: 0 15px;
  }
`;

export const NavbarItemsLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  transition: 0.2s ease;

  &:hover {
    transition: 0.2s ease;
    color: #0b9eee;
    text-decoration: underline;
  }

  @media only screen and (max-width: 620px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

// MENU STYLES

export const Menu = styled.div`
  padding: 105px 57px 0 20px;

  .menu-btn {
    background-color: #0a0b11;
    margin-right: 30px;

    &::after {
      background-color: #0a0b11;
    }
    &::before {
      background-color: #0a0b11;
    }
  }
`;

export const MenuList = styled.ul`
  margin-top: 100px;
  margin-bottom: 48px;
`;

export const MenuListItems = styled.li`
  margin: 50px 0;
`;

export const MenuItemsLink = styled.a`
  text-decoration: none;
  font-size: 29px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;

  &:hover {
    transition: 0.2s ease;
    color: #0b9eee;
    text-decoration: underline;
  }
`;

export const MenuPhoneBtn = styled.a`
  width: 105px;
  height: 57px;
  padding: 3px 20px;
  border: 2px solid #000000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: relative;
  color: #000000;

  &::after {
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    position: absolute;
    bottom: -20px;
    content: "Позвонить";
  }
`;

export const MenuBtn = styled.button`
  width: 55px;
  height: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 30px;
  cursor: pointer;
  display: none;
  z-index: 1;

  &::after {
    width: 55px;
    height: 8px;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 16px;
    content: "";
  }

  &::before {
    width: 55px;
    height: 8px;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 16px;
    content: "";
  }

  @media only screen and (max-width: 540px) {
    display: block;
  }
`;
