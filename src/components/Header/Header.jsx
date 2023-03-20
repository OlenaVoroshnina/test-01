import logoImg from 'images/logo.svg';
import { Logo } from './Header.styled';

export const Header = () => {
  return (
    <Logo>
        <img src={logoImg} alt="logo" />
    </Logo>
  );
};