import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 16px;
  padding: 10px;
`;

export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #fff;
  width: 100px;
  padding: 10px;
`;

export const ProfileDropdownOption = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 16px;
  padding: 10px;
`;
