import {
  NavbarContainer,
  LogoContainer,
  Logo,
  NavLinks,
  NavLink,
  ProfileIcon,
  ProfileDropdown,
  ProfileDropdownOption,
} from './styles';

interface NavbarProps {
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);

  const handleProfileIconClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <NavLinks>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/analysis">Analysis</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/activity">Activity</NavLink>
      </NavLinks>
      <ProfileIcon src="/profile.png" onClick={handleProfileIconClick} />
      {showProfileDropdown && (
        <ProfileDropdown>
          <ProfileDropdownOption href="/settings">Settings</ProfileDropdownOption>
          <ProfileDropdownOption href="/logout">Logout</ProfileDropdownOption>
        </ProfileDropdown>
      )}
    </NavbarContainer>
  );
};

export default Navbar;